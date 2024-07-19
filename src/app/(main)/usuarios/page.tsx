'use client';
import React, { Suspense } from 'react';

const Usuarios = () => {
    return (
        <Suspense>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Usuários</h5>
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default Usuarios;
