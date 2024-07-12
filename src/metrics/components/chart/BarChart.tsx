import React, { Suspense } from 'react';
import { Chart } from 'primereact/chart';

interface BarchartProps {
    data: any,
    options: any,
}

export default function BarChart(props: Readonly<BarchartProps>) {
    // @ts-ignore
    return (
        <Suspense>
            <div className="card">
                <Chart type="bar" data={props.data} options={props.options} />
            </div>
        </Suspense>
    );
}
