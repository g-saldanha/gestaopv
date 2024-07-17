'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { CultosService } from '@/metrics/service/CultosService';
import { formatDatetoDayMonth } from '@/metrics/utils/date';
import AnoButton from '@/metrics/components/button/AnoButton';
import CultosView from '@/metrics/components/CultosView';
import { getTotals } from '@/metrics/utils/totals';

const DomingoNoite = () => {
    const fullYear = new Date().getFullYear();
    const [isLoading, setIsLoading] = useState(true);
    const [labels, setLabels] = useState<string[]>([]);
    const [now, setNow] = useState<number[]>([]);
    const [last, setLast] = useState<number[]>([]);
    const [veryLast, setVeryLast] = useState<number[]>([]);
    const [totais, setTotais] = useState<Metrics.CultosTotais | null>(null);
    const [year, setYear] = useState({ name: fullYear, code: fullYear });
    useEffect(() => {
        CultosService.getDomingosNoite(year.code).then(cultos => {
            const totals = getTotals(cultos);
            setTotais(totals);
            setLabels(cultos.now.map(culto => formatDatetoDayMonth(culto.data)));
            setLast(cultos.last.map((culto => culto.total)));
            setVeryLast(cultos.veryLast.map((culto => culto.total)));
            setNow(cultos.now.map((culto => culto.total)));
        }).then(() => setIsLoading(false));
    }, [year]);

    return (
        <Suspense>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Métricas de Domingo Noite</h5>
                        <AnoButton year={year} handleYear={setYear} />
                    </div>
                    {/*// @ts-ignore*/}
                    <CultosView totais={totais} now={now} labels={labels} last={last} year={year}
                                isLoading={isLoading} veryLast={veryLast} />
                </div>
            </div>
        </Suspense>
    );
};

export default DomingoNoite;
