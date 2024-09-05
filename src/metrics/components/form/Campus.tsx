'use client';
import React, { useState } from 'react';
import { AutoComplete, AutoCompleteChangeEvent, AutoCompleteCompleteEvent } from 'primereact/autocomplete';
import { CadastroService, Campuses } from '@/metrics/service/CadastroService';

interface Campus {
    label: string;
    value: string;
}

interface Country {
    label: string;
    code: string;
    items: Campus[];
}

export default function Campus() {
    const [campuses] = useState<Campuses[]>(CadastroService.getCampusesMem());

    // @ts-ignore
    const [selectedCampus, setSelectedCampus] = useState<Campus>(null);
    // @ts-ignore
    const [filteredCities, setFilteredCities] = useState<Campus[]>(null);
    const groupedCities = [
        {
            label: 'Brasil',
            code: 'BR',
            items:
                campuses
                    .filter((campus) => campus.country === 'BR') as Campus[]
        },
        {
            label: 'USA',
            code: 'US',
            items:
                campuses
                    .filter((campus) => campus.country === 'US') as Campus[]

        },
        {
            label: 'Reino Unido',
            code: 'GB',
            items:
                campuses
                    .filter((campus) => campus.country === 'GB') as Campus[]
        },
        {
            label: 'Itália',
            code: 'IT',
            items:
                campuses
                    .filter((campus) => campus.country === 'IT') as Campus[]
        },
        {
            label: 'Portugal',
            code: 'PT',
            items:
                campuses
                    .filter((campus) => campus.country === 'PT')
        }
        // , {
        //     label: 'Alemanha',
        //     code: 'DE',
        //     items:
        //         campuses
        //             .filter((campus) => campus.country === 'DE')
        // }, {
        //     label: 'Suíça',
        //     code: 'CH',
        //     items:
        //         campuses
        //             .filter((campus) => campus.country === 'CH')
        // }
    ];
    const groupedItemTemplate = (item: Country) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={item.label}
                    src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
                    className={`flag flag-${item.code.toLowerCase()} mr-2`}
                    style={{ width: '18px' }}
                />
                <div>{item.label}</div>
            </div>
        );
    };

    const search = (event: AutoCompleteCompleteEvent) => {
        let query = event.query;
        let _filteredCities = [];

        for (let country of groupedCities) {
            let filteredItems = country.items.filter((item) => item.label.toLowerCase().indexOf(query.toLowerCase()) !== -1);

            if (filteredItems?.length) {
                _filteredCities.push({ ...country, ...{ items: filteredItems } });
            }
        }

        // @ts-ignore
        setFilteredCities(_filteredCities);
    };

    return (
        <AutoComplete value={selectedCampus} onChange={(e: AutoCompleteChangeEvent) => setSelectedCampus(e.value)}
                      suggestions={filteredCities} completeMethod={search}
                      field="label" optionGroupLabel="label" optionGroupChildren="items"
                      optionGroupTemplate={groupedItemTemplate} placeholder="Digite a sua PV"
                      className="w-full mb-3"
                      inputClassName="w-full" required dropdown />
    );
}

