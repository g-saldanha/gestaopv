import React from 'react';

interface LiveCardProps {
    totais: Metrics.CultosTotais;
}

export default function LiveCard({ totais }: LiveCardProps) {
    return (
        <div className="col-12 lg:col-6 xl:col-3">
            <div className="card mb-0">
                <div className="flex justify-content-between mb-3">
                    <div>
                        <span className="block text-500 font-medium mb-3">Live</span>
                        <div
                            className="text-900 font-medium text-xl">{totais.now.youtube}</div>
                    </div>
                    <div
                        className="flex align-items-center justify-content-center bg-blue-100 border-round"
                        style={{ width: '2.5rem', height: '2.5rem' }}>
                        <i className="pi pi-video text-blue-500 text-xl" />
                    </div>
                </div>
                <span className="text-500">Média por culto de </span>
                <span
                    className="text-green-500 font-medium">{Math.round(totais.now.youtube / totais.now.cultos)} streamers </span>
            </div>
        </div>
    );
}
