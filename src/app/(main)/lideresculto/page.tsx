'use client';
import React, { Suspense } from 'react';
import OrgChart from '@/metrics/components/organograma/OrgChart';
import { orgdatalideresculto } from '@/metrics/components/organograma/orgdatalideresculto';

const Organograma = () => {
    return (
        <Suspense>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Organograma</h5>
                        <OrgChart orgdata={orgdatalideresculto} />
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default Organograma;
