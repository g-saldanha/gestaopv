import React from 'react';
import { Skeleton } from 'primereact/skeleton';

export default function CardSkeleton() {

    return (
        <>
            <div className="border-round border-1 surface-border p-4 surface-card">
                <Skeleton width="100%" height="150px"></Skeleton>
            </div>
            <div className="border-round border-1 surface-border p-4 surface-card">
                <Skeleton width="100%" height="150px"></Skeleton>
            </div>
            <div className="border-round border-1 surface-border p-4 surface-card">
                <Skeleton width="100%" height="150px"></Skeleton>
            </div>
        </>
    );
}
