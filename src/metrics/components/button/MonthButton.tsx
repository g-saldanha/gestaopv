import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import { getPastMonths } from '@/metrics/utils/date';

interface AnoProps {
    month: string;
    handleMonth: Function;
}

export default function AnoButton(props: Readonly<AnoProps>) {
    const months = getPastMonths();

    return (
        <Dropdown value={props.month} onChange={(e) => props.handleMonth(e.value)} options={months}
                  optionLabel="name"
                  placeholder="Selecione o mês" className="w-full md:w-14rem" />
    );
}
