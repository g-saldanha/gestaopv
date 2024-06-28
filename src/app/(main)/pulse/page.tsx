'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { CultosRepository } from '@/metrics/repository/CultosRepository';

const Sorteios = () => {
    const [records, setRecords] = useState<any>([]);
    useEffect(() => {
        CultosRepository.getDomingos().then((results) => setRecords(results));
    }, []);
    console.log(records);
    console.log({
        POSTGRES_URL: process.env.POSTGRES_URL,
        POSTGRES_URL_NON_POOLING: process.env.POSTGRES_URL_NON_POOLING
    });
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
