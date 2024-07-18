'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { CultosService } from '@/metrics/service/CultosService';
import CultosView from '@/metrics/components/CultosView';
import { getTotals, transformCultosData } from '@/metrics/utils/cultos';
import MonthButton from '@/metrics/components/button/MonthButton';


export default function Domingo() {
    const fullYear = new Date().getFullYear();
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
        CultosService.getDomingos(fullYear).then(cultos => {
            setCultos(cultos);
        });
    }, []);

    useEffect(() => {
        if (cultos !== null) {
            const totals = getTotals(cultos);
            if (month == 'Todos') {

                setTotais(totals);
                let transformCultos = transformCultosData(cultos);
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
                        <h5>Métricas Gerais de Domingo</h5>
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

