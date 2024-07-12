import React from 'react';

interface TotalCardProps {
    totais: Metrics.Totais;
}

export default function TotalCard({ totais }: TotalCardProps) {
    return (
        <div className="col-12 lg:col-3 xl:col-3">
            <div className="card mb-0">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-500 font-medium mb-3">Total</span>
                        <div
                            className="text-900 font-medium text-xl">{totais.total}</div>
                    </div>
                    <div
                        className="flex align-items-center justify-content-center bg-blue-100 border-round"
                        style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-users text-blue-500 text-xl" />
                    </div>
                </div>
                <span className="text-500">Média por culto de </span>
                <span
                    className="text-green-500 font-medium">{Math.round(totais.total / totais.cultos)} pessoas </span>
            </div>
        </div>
    );
}
