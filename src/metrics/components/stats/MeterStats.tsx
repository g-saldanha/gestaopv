import React from 'react';
import { MeterGroup } from 'primereact/metergroup';

interface MeterStatsProps {
    totais: Metrics.Totais;
}

export default function MeterStats({ totais }: MeterStatsProps) {
    const values = [
        {
            label: 'Visitantes',
            color: '#34d399',
            // value: Math.round(((totais.visitantes / totais.cultos) / media)),
            value: Math.round(totais.visitantes * 100 / totais.total),
            icon: 'pi pi-table'
        },
        {
            label: 'Voluntários',
            color: '#fbbf24',
            value: Math.round(((totais.voluntarios * 100) / totais.total)),
            icon: 'pi pi-inbox'
        },
        {
            label: 'Salvações',
            color: '#60a5fa',
            value: Math.round(((totais.salvacoes * 100) / totais.total)),
            icon: 'pi pi-image'
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} />
        </div>
    );
}
