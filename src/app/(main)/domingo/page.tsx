'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { CultosService } from '@/metrics/service/CultosService';
import { formatDatetoDayMonth } from '@/metrics/utils/date';
import AnoButton from '@/metrics/components/button/AnoButton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import { MeterGroup } from 'primereact/metergroup';
import BarChart from '@/metrics/components/chart/BarChart';
import TotalCard from '@/metrics/components/stats/TotalCard';
import VoluntariosCard from '@/metrics/components/stats/VoluntariosCard';
import KidsCard from '@/metrics/components/stats/KidsCard';
import LiveCard from '@/metrics/components/stats/LiveCard';
import SalvacoesCard from '@/metrics/components/stats/SalvacoesCard';
import VisitantesCard from '@/metrics/components/stats/VisitantesCard';


export default function Domingo() {
    const fullYear = new Date().getFullYear();
    // @ts-ignore
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [totais, setTotais] = useState({
        total: 0,
        youtube: 0,
        kids: 0,
        visitantes: 0,
        voluntarios: 0,
        salvacoes: 0,
        cultos: 0
    });
    const [year, setYear] = useState({ name: fullYear, code: fullYear });
    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        CultosService.getDomingos(year.code).then(cultos => {
            // @ts-ignore  total: number;
            //         youtube: number;
            //         kids: number;
            //         visitantes: number;
            //         voluntarios: number;
            //         salvacoes: number;
            const totais = {
                total: 0,
                youtube: 0,
                kids: 0,
                visitantes: 0,
                voluntarios: 0,
                salvacoes: 0,
                cultos: 0
            };
            totais.total = parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.total, 0)));
            totais.youtube = parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.youtube, 0)), 10);
            totais.kids = parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.kids, 0)), 10);
            totais.visitantes = parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.visitantes, 0)), 10);
            totais.voluntarios = parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.voluntarios, 0)), 10);
            totais.salvacoes = parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.salvacoes, 0)), 10);
            totais.cultos = cultos.now.length;
            setTotais(totais);
            const labels = cultos.now.map(culto => formatDatetoDayMonth(culto.data));
            const data = {
                labels,
                datasets: [
                    {
                        label: year.code - 1,
                        backgroundColor: 'grey',
                        borderColor: 'grey',
                        data: cultos.last.map((culto => culto.total))
                    },
                    {
                        label: year.code,
                        backgroundColor: 'black',
                        borderColor: 'black',
                        data: cultos.now.map((culto => culto.total))
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
                            text: `Média por culto ${Math.round(totais.total / totais.cultos)}`
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

            setChartData(data);
            setChartOptions(options);
        });
    }, [year]);

    const values = [{ label: 'Space used', value: 15 }];

    return (
        <Suspense>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Métricas Gerais de Domingo</h5>
                        <AnoButton year={year} handleYear={setYear} />
                    </div>
                    <div className="card">
                        <Accordion multiple activeIndex={[0, 1, 2]}>
                            <AccordionTab header="Estatísticas">
                                <div className="grid">
                                    <TotalCard totais={totais} />
                                    <VoluntariosCard totais={totais} />
                                    <KidsCard totais={totais} />
                                    <LiveCard totais={totais} />
                                    <SalvacoesCard totais={totais} />
                                    <VisitantesCard totais={totais} />
                                </div>
                                <div className="flex justify-content-center">
                                    <MeterGroup values={values} />
                                </div>
                            </AccordionTab>
                            <AccordionTab header="Gráfico de Linhas">
                                <p className="m-0">
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
                                    doloremque laudantium, totam rem aperiam, eaque ipsa
                                    quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt
                                    explicabo. Nemo enim ipsam voluptatem quia voluptas
                                    sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui
                                    ratione voluptatem sequi nesciunt.
                                    Consectetur, adipisci velit, sed quia non numquam eius modi.
                                </p>
                            </AccordionTab>
                            <AccordionTab header="Gráfico de Barra">
                                <BarChart data={chartData} options={chartOptions} />
                            </AccordionTab>
                        </Accordion>
                    </div>

                </div>
            </div>
        </Suspense>
    );
};

