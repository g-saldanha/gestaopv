'use client';
import React, { Suspense } from 'react';
import OrgChart from '@/metrics/components/organograma/OrgChart';

const Organograma = () => {
    return (
        <Suspense>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Organograma</h5>
                        <OrgChart />
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default Organograma;
