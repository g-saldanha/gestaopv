'use client';
import React, { Suspense } from 'react';
import OrgChart from '@/metrics/components/organograma/OrgChart';
import { orgdataliderescomunidade } from '@/metrics/components/organograma/orgdataliderescomunidade';

const Organograma = () => {
    return (
        <Suspense>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Organograma</h5>
                        <OrgChart orgdata={orgdataliderescomunidade} />
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default Organograma;
