'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { CultosService } from '@/metrics/service/CultosService';
import { formatDatetoDayMonth } from '@/metrics/utils/date';
import AnoButton from '@/metrics/components/button/AnoButton';
import CultosView from '@/metrics/components/CultosView';


export default function Domingo() {
    const fullYear = new Date().getFullYear();
    const [isLoading, setIsLoading] = useState(true);
    const [labels, setLabels] = useState<string[]>([]);
    const [now, setNow] = useState<number[]>([]);
    const [last, setLast] = useState<number[]>([]);
    const [totais, setTotais] = useState<Metrics.Totais>({
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
        }).then(() => setIsLoading(false));
    }, [year]);

    return (
        <Suspense>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Métricas Gerais de Domingo</h5>
                        <AnoButton year={year} handleYear={setYear} />
                    </div>
                    <CultosView totais={totais} now={now} labels={labels} last={last} year={year}
                                isLoading={isLoading} />
                </div>
            </div>
        </Suspense>
    );
};

