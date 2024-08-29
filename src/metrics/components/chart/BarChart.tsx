import React, { Suspense } from 'react';
import { Chart } from 'primereact/chart';

interface BarchartProps {
    now: number[];
    last: number[];
    labels: string[];
    totais: Metrics.CultosTotais;
    year: any;
    veryLast: number[],
}

export default function BarChart(props: Readonly<BarchartProps>) {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    const data = {
        labels: props.labels,
        datasets: [
            {
                label: props.year - 2,
                backgroundColor: '#ADD8E6',
                borderColor: '#ADD8E6',
                data: props.veryLast
            },
            {
                label: props.year - 1,
                backgroundColor: '#90EE90',
                borderColor: '#90EE90',
                data: props.last
            },
            {
                label: props.year,
                backgroundColor: '#FFA07A',
                borderColor: '#FFA07A',
                data: props.now
            }
        ]
    };
    const options = {
        maintainAspectRatio: false,
        aspectRatio: 0.8,
        plugins: {
            legend: {
                title: {
                    display: true,
                    text: `Gráfico de Cultos do Ano Vigente`
                },
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
    // @ts-ignore
    return (
        <Suspense>
            <div className="card">
                <Chart type="bar" data={data} options={options} />
            </div>
        </Suspense>
    );
}
