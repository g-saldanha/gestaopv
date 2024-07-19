'use client';
import React, { Suspense } from 'react';

const Sorteios = () => {
    return (
        <Suspense>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Métricas Gerais do Evento só para elas</h5>
                        <div style={{ textAlign: 'center' }}>
                            <img src={`/pv/images/notfound/emconstrucao.png`} alt="Wed logo"
                                 className="mb-5 w-24rem flex-shrink-0" />
                        </div>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default Sorteios;
