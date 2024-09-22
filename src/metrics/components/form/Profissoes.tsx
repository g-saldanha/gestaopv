'use client';
// @ts-ignore
import profi from './json/listaCargos.json';
import React, { useState } from 'react';
import { AutoComplete, AutoCompleteCompleteEvent } from 'primereact/autocomplete';


interface JobProps {
    handleJob: Function;
}

export default function Profissoes({ handleJob }: Readonly<JobProps>) {
    const [value, setValue] = useState<string>('');
    const [items, setItems] = useState<string[]>(profi);
    const [filteredItems, setFilteredItems] = useState<string[]>();

    const search = (event: AutoCompleteCompleteEvent) => {
        let _filteredCountries;

        if (!event.query.trim().length) {
            _filteredCountries = [...items];
        } else {
            _filteredCountries = items.filter((item) => {
                return item.toLowerCase().startsWith(event.query.toLowerCase());
            });
        }

        setFilteredItems(_filteredCountries);
    };

    return (
        <AutoComplete value={value} suggestions={filteredItems} completeMethod={search}
                      onChange={(e) => {
                          setValue(e.value);
                          handleJob('job', e.value);
                      }} className="w-full mb-3"
                      inputClassName="w-full" />
    );
}
