import React from 'react';
import { formatBigNumber } from '@/metrics/utils/cultos';

interface VoluntariosCardProps {
    totais: Metrics.CultosTotais;
}

export default function VoluntariosCard({ totais }: Readonly<VoluntariosCardProps>) {
    const reference = totais.now.voluntarios > totais.last.voluntarios;
    let calc = Math.round(((totais.now.voluntarios - totais.last.voluntarios) / totais.last.voluntarios) * 100);
    calc = Number.isFinite(calc) ? calc : 0;
    const classTypefrom = () => {
        if (reference) return 'pi pi-arrow-up text-green-500 text-md font-medium ';
        else return 'pi pi-arrow-down text-red-500 text-md font-medium';
    };

    return (
        <div className="col-12 lg:col-6 xl:col-3">
            <div className="card mb-0">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-500 font-medium mb-3">Voluntários</span>
                        <div
                            className="text-900 font-medium text-xl">{formatBigNumber(totais.now.voluntarios)}&nbsp;<i
                            className={classTypefrom()} />
                            <span
                                className={reference ? 'text-green-500 text-md' : 'text-red-500 text-md'}>{calc || 0}%</span>
                        </div>
                    </div>
                    <div
                        className="flex align-items-center justify-content-center bg-blue-100 border-round"
                        style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-id-card text-blue-500 text-xl" />
                    </div>
                </div>
                <div className="mb-1">
                        <span
                            className={reference ? 'text-green-500' : 'text-red-500'}>{formatBigNumber(totais.last.voluntarios)} em {new Date().getFullYear() - 1}</span>
                </div>
                <hr />
                <span className="text-500">Média por culto de </span>
                <span
                    className="text-green-500 font-medium">{Math.round(totais.now.voluntarios / totais.now.cultos)} voluntários</span>
            </div>
        </div>
    );
}
