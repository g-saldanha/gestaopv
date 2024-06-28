'use client';
import React, { Suspense, useEffect, useState } from 'react';
import { CultosRepository } from '@/metrics/repository/CultosRepository';

const Sorteios = () => {
    const [records, setRecords] = useState<any>([]);
    useEffect(() => {
        CultosRepository.getDomingos().then((results) => setRecords(results));
    }, []);
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
