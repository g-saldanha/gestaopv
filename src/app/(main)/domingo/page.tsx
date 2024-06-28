'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { Chart } from 'primereact/chart';
import { CultosService } from '@/metrics/service/CultosService';
import { formatDatetoDayMonth } from '@/metrics/utils/date';
import AnoButton from '@/metrics/components/button/AnoButton';


export default function Domingo() {
    const fullYear = new Date().getFullYear();
    // @ts-ignore
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [year, setYear] = useState({ name: fullYear, code: fullYear });
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        CultosService.getDomingos(year.code).then(cultos => {
            // @ts-ignore
            const labels = cultos.filter(culto => culto.data?.getFullYear() === year.code).map(culto => formatDatetoDayMonth(culto.data));
            const data = {
                labels,
                datasets: [
                    {
                        label: year.code - 1,
                        backgroundColor: 'grey',
                        borderColor: 'grey',
                        data: cultos.filter(culto => culto.data?.getFullYear() === year.code - 1).map((culto => culto.total))
                    },
                    {
                        label: year.code,
                        backgroundColor: 'black',
                        borderColor: 'black',
                        data: cultos.filter(culto => culto.data?.getFullYear() === year.code).map((culto => culto.total))
                    }
                ]
            };
            const options = {
                maintainAspectRatio: false,
                aspectRatio: 0.8,
                plugins: {
                    legend: {
                        labels: {
                            fontColor: textColor
                        }
                    }
                },
                scales: {
                    x: {
                        ticks: {
                            color: textColorSecondary,
                            font: {
                                weight: 500
                            }
                        },
                        grid: {
                            display: false,
                            drawBorder: false
                        }
                    },
                    y: {
                        ticks: {
                            color: textColorSecondary
                        },
                        grid: {
                            color: surfaceBorder,
                            drawBorder: false
                        }
                    }
                }
            };

            setChartData(data);
            setChartOptions(options);
        });
    }, [year]);
    return (
        <Suspense>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Métricas Gerais de Domingo</h5>
                        <AnoButton year={year} handleYear={setYear} />
                    </div>
                    <div className="card">
                        <Chart type="bar" data={chartData} options={chartOptions} />
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

