import React from 'react';
import { OrganizationChart } from 'primereact/organizationchart';

interface OrgChartProps {
    orgdata: any;
}

export default function OrgChart(props: Readonly<OrgChartProps>) {

    const nodeTemplate = (node: any) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column">
                    <div className="flex flex-column align-items-center">
                        <img alt={node.data.name} src={node.data.image} className="mb-3 w-3rem h-3rem" />
                        <span className="font-bold mb-2">{node.data.name}</span>
                        <span>{node.data.title}</span>
                    </div>
                </div>
            );
        }

        return node.label;
    };

    return (
        <div className="card overflow-x-auto">
            <OrganizationChart value={props.orgdata} nodeTemplate={nodeTemplate} />
        </div>
    );
}

