import React from 'react';
import { formatBigNumber } from '@/metrics/utils/cultos';

interface TotalCardProps {
    totais: Metrics.CultosTotais;
}

export default function MeanCard({ totais }: Readonly<TotalCardProps>) {
    const reference = totais.now.total > totais.last.total;

    return (
        <div className="col-12 lg:col-3 xl:col-3">
            <div className="card mb-0">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-base font-medium mb-3">Média de Pessoas</span>
                        <div
                            className="text-900 font-medium text-base mb-1">{Math.round(totais.now.total / totais.now.cultos)} por
                            culto em 2024
                        </div>
                        <span
                            className={reference ? 'text-green-500 text-sm' : 'text-red-500 text-sm'}>{formatBigNumber(totais.now.total)} em {formatBigNumber(totais.now.cultos)} cultos
                        </span>
                    </div>
                    <div
                        className="flex align-items-center justify-content-center bg-blue-100 border-round"
                        style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-chart-pie text-blue-500 text-xl" />
                    </div>
                </div>
                <hr />
                <div className="mb-1">
                    <div
                        className="text-900 font-medium text-base mb-1">{Math.round(totais.last.total / totais.last.cultos)} por
                        culto em {new Date().getFullYear() - 1}
                    </div>
                    <span
                        className={reference ? 'text-green-500 text-sm' : 'text-red-500 text-sm'}>{formatBigNumber(totais.last.total)} em {formatBigNumber(totais.last.cultos)} cultos
                        </span>
                </div>
                <hr />
                <div className="mb-1">
                    <div
                        className="text-900 font-medium text-base mb-1">{Math.round(totais.veryLast.total / totais.veryLast.cultos) || 0} por
                        culto em {new Date().getFullYear() - 2}
                    </div>
                    <span
                        className={reference ? 'text-green-500 text-sm' : 'text-red-500 text-sm'}>{formatBigNumber(totais.veryLast.total)} em {formatBigNumber(totais.veryLast.cultos)} cultos
                        </span>
                </div>
            </div>
        </div>
    );
}
