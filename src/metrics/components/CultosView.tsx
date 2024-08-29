import { Accordion, AccordionTab } from 'primereact/accordion';
import TotalCard from '@/metrics/components/stats/TotalCard';
import VoluntariosCard from '@/metrics/components/stats/VoluntariosCard';
import KidsCard from '@/metrics/components/stats/KidsCard';
import LiveCard from '@/metrics/components/stats/LiveCard';
import SalvacoesCard from '@/metrics/components/stats/SalvacoesCard';
import VisitantesCard from '@/metrics/components/stats/VisitantesCard';
import MeterStats from '@/metrics/components/stats/MeterStats';
import LineChart from '@/metrics/components/chart/LineChart';
import BarChart from '@/metrics/components/chart/BarChart';
import React from 'react';
import CardSkeleton from '@/metrics/components/loading/CardSkeleton';
import MeterStatsWithLotation from '@/metrics/components/stats/MeterStatsWithLotation';
import MeanCard from '@/metrics/components/stats/MeanCard';

interface CultosViewProps {
    totais: Metrics.CultosTotais,
    now: number[],
    labels: string[],
    last: number[],
    veryLast: number[],
    isLoading: boolean
}

export default function CultosView(props: Readonly<CultosViewProps>) {
    const { totais, now, labels, last, isLoading, veryLast } = props;
    const year = new Date().getFullYear();
    if (isLoading) {
        return <CardSkeleton />;
    }

    return (
        <div className="card">
            <Accordion multiple activeIndex={[0, 1, 2]}>
                <AccordionTab header="Gráfico de Linhas">
                    <LineChart now={now} labels={labels} last={last} year={year} totais={totais} veryLast={veryLast} />
                </AccordionTab>
                <AccordionTab header="Estatísticas">
                    <div className="grid">
                        <MeanCard totais={totais} />
                        <TotalCard totais={totais} />
                        <VoluntariosCard totais={totais} />
                        <KidsCard totais={totais} />
                        <LiveCard totais={totais} />
                        <SalvacoesCard totais={totais} />
                        <VisitantesCard totais={totais} />
                    </div>
                    <MeterStats totais={totais} />
                    <MeterStatsWithLotation totais={totais} />
                </AccordionTab>
                <AccordionTab header="Gráfico de Barra">
                    <BarChart now={now} labels={labels} last={last} year={year} totais={totais} veryLast={veryLast} />
                </AccordionTab>
            </Accordion>
        </div>
    );

}
