'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { CultosService } from '@/metrics/service/CultosService';
import { formatDatetoDayMonth } from '@/metrics/utils/date';
import AnoButton from '@/metrics/components/button/AnoButton';
import { Accordion, AccordionTab } from 'primereact/accordion';
import BarChart from '@/metrics/components/chart/BarChart';
import TotalCard from '@/metrics/components/stats/TotalCard';
import VoluntariosCard from '@/metrics/components/stats/VoluntariosCard';
import KidsCard from '@/metrics/components/stats/KidsCard';
import LiveCard from '@/metrics/components/stats/LiveCard';
import SalvacoesCard from '@/metrics/components/stats/SalvacoesCard';
import VisitantesCard from '@/metrics/components/stats/VisitantesCard';
import MeterStats from '@/metrics/components/stats/MeterStats';
import LineChart from '@/metrics/components/chart/LineChart';


export default function Domingo() {
    const fullYear = new Date().getFullYear();
    const [labels, setLabels] = useState<string[]>([]);
    const [now, setNow] = useState<number[]>([]);
    const [last, setLast] = useState<number[]>([]);
    // @ts-ignore
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
        CultosService.getDomingos(year.code).then(cultos => {
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
            setLabels(cultos.now.map(culto => formatDatetoDayMonth(culto.data)));
            setLast(cultos.last.map((culto => culto.total)));
            setNow(cultos.now.map((culto => culto.total)));
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
                                <MeterStats totais={totais} />
                            </AccordionTab>
                            <AccordionTab header="Gráfico de Linhas">
                                <LineChart now={now} labels={labels} last={last} year={year} totais={totais} />
                            </AccordionTab>
                            <AccordionTab header="Gráfico de Barra">
                                <BarChart now={now} labels={labels} last={last} year={year} totais={totais} />
                            </AccordionTab>
                        </Accordion>
                    </div>

                </div>
            </div>
        </Suspense>
    );
};

