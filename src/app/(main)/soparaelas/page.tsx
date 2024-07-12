'use client';
import React, { Suspense, useState } from 'react';

const Sorteios = () => {
    const [records, setRecords] = useState<any>([]);
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
