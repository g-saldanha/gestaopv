'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { ChurchMetricsApi } from '@/metrics/service/ChurchMetricsApi';

const Sorteios = () => {
    const [records, setRecords] = useState<Metrics.Record[]>([]);
    useEffect(() => {
        ChurchMetricsApi.getRecordsDomingo().then(records => setRecords(records));
    }, []);

    console.log(records);
    return (
        <Suspense>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Métricas Gerais de Domingo</h5>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default Sorteios;
