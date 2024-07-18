'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { CultosService } from '@/metrics/service/CultosService';
import CultosView from '@/metrics/components/CultosView';
import { getMonthTotals, getTotals, transformCultosData, transformMonthCultosData } from '@/metrics/utils/cultos';
import MonthButton from '@/metrics/components/button/MonthButton';
import { getMonth } from '@/metrics/utils/date';

const DomingoNoite = () => {
    const year = new Date().getFullYear();
    // @ts-ignore
    const [cultos, setCultos] = useState<Metrics.Cultos>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [labels, setLabels] = useState<string[]>([]);
    const [now, setNow] = useState<number[]>([]);
    const [last, setLast] = useState<number[]>([]);
    const [veryLast, setVeryLast] = useState<number[]>([]);
    const [totais, setTotais] = useState<Metrics.CultosTotais | null>(null);
    const [month, setMonth] = useState('Todos');
    useEffect(() => {
        CultosService.getDomingosNoite(year).then(cultos => {
            setCultos(cultos);
        });
    }, []);

    useEffect(() => {
        if (cultos !== null) {
            if (month == 'Todos') {
                const totals = getTotals(cultos);
                setTotais(totals);
                let transformCultos = transformCultosData(cultos);
                setLabels(transformCultos.labels);
                setLast(transformCultos.last);
                setVeryLast(transformCultos.veryLast);
                setNow(transformCultos.now);
                setIsLoading(false);
            } else {
                const monthIndex = getMonth(month);
                const totals = getMonthTotals(cultos, monthIndex);
                setTotais(totals);
                let transformCultos = transformMonthCultosData(cultos, monthIndex);
                setLabels(transformCultos.labels);
                setLast(transformCultos.last);
                setVeryLast(transformCultos.veryLast);
                setNow(transformCultos.now);
                setIsLoading(false);
            }
        }
    }, [month, cultos]);

    return (
        <Suspense>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Métricas de Domingo Noite</h5>
                        <MonthButton month={month} handleMonth={setMonth} />
                    </div>
                    {/*// @ts-ignore*/}
                    <CultosView totais={totais} now={now} labels={labels} last={last} month={month}
                                isLoading={isLoading} veryLast={veryLast} />
                </div>
            </div>
        </Suspense>
    );
};

export default DomingoNoite;
