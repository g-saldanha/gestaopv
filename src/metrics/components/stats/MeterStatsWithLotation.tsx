import React from 'react';
import { MeterGroup } from 'primereact/metergroup';

interface MeterStatsProps {
    totais: Metrics.CultosTotais;
}

export default function MeterStatsWithLotation({ totais }: Readonly<MeterStatsProps>) {
    const values = [
        {
            label: 'Visitantes',
            color: '#F8E71C',
            value: Math.round(totais.now.visitantes * 100 / (totais.now.cultos * 800)),
            icon: 'pi pi-bell'
        },
        {
            label: 'Membros Voluntários',
            color: '#fbbf24',
            value: Math.round(((totais.now.voluntarios * 100) / (totais.now.cultos * 800))),
            icon: 'pi pi-id-card'
        },
        {
            label: 'Salvações',
            color: '#34d399',
            value: Math.round(((totais.now.salvacoes * 100) / (totais.now.cultos * 800))),
            icon: 'pi pi-trophy'
        },
        {
            label: 'Membros',
            color: '#60a5fa',
            value: Math.round(((totais.now.total - totais.now.salvacoes - totais.now.voluntarios - totais.now.visitantes) * 100 / (totais.now.cultos * 800))),
            icon: 'pi pi-users'
        }
    ];

    return (
        <div className="card flex flex-column justify-content-center align-items-center">
            <h4>Em relação a lotação máxima (800 pessoas)</h4><br />
            <MeterGroup values={values} />
        </div>
    );
}
