import React from 'react';
import { Dropdown } from 'primereact/dropdown';

function getYearsFrom2022() {
    const startYear = 2022;
    const currentYear = new Date().getFullYear();
    const years = [];

    for (let year = startYear; year <= currentYear; year++) {
        years.push({ name: year, code: year });
    }

    return years;
}

interface AnoProps {
    year: object;
    handleYear: Function;
}

export default function AnoButton(props: AnoProps) {
    const years = getYearsFrom2022();

    return (
        <Dropdown value={props.year} onChange={(e) => props.handleYear(e.value)} options={years}
                  optionLabel="name"
                  placeholder="Select um ano" className="w-full md:w-14rem" />
    );
}
