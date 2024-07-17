import React from 'react';
import { MeterGroup } from 'primereact/metergroup';

interface MeterStatsProps {
    totais: Metrics.CultosTotais;
}

export default function MeterStats({ totais }: MeterStatsProps) {
    const values = [
        {
            label: 'Visitantes',
            color: '#34d399',
            value: Math.round(totais.now.visitantes * 100 / totais.now.total),
            icon: 'pi pi-bell'
        },
        {
            label: 'Voluntários',
            color: '#fbbf24',
            value: Math.round(((totais.now.voluntarios * 100) / totais.now.total)),
            icon: 'pi pi-id-card'
        },
        {
            label: 'Salvações',
            color: '#60a5fa',
            value: Math.round(((totais.now.salvacoes * 100) / totais.now.total)),
            icon: 'pi pi-trophy'
        },
        {
            label: 'Membros',
            color: '#60a5fa',
            value: Math.round(((totais.now.total - totais.now.salvacoes - totais.now.voluntarios - totais.now.visitantes) * 100 / totais.now.total)),
            icon: 'pi pi-users'
        }
    ];

    return (
        <div className="card flex justify-content-center">
            <MeterGroup values={values} />
        </div>
    );
}
