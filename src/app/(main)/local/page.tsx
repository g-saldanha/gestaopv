'use client';
import React, { Suspense } from 'react';
import OrgChart from '@/metrics/components/organograma/OrgChart';
import { orgdatalocal } from '@/metrics/components/organograma/orgdatalocal';

const Organograma = () => {
    return (
        <Suspense>
            <div className="grid">
                <div className="col-12">
                    <div className="card">
                        <h5>Organograma</h5>
                        <OrgChart orgdata={orgdatalocal} />
                    </div>
                </div>
            </div>
        </Suspense>
    );
};

export default Organograma;
