/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import { addLocale, locale } from 'primereact/api';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { getLocales } from '@/locales/getLocales';
import CanasConexaoForm from '@/metrics/components/auth/canasvieiras/CanasConexaoForm';

interface LocaleFiles {
    [key: string]: any;
}

interface JustifyOption {
    country: string;
    value: string;
    name: string;
}

const primeReactLocaleFiles: LocaleFiles = getLocales;
export default function Cadastro() {
    // const browserLocale = Object.keys(primeReactLocaleFiles)?.includes(navigator.languages?.[0] || navigator.language) ? navigator.languages?.[0] || navigator.language : 'pt-BR';
    let searchElement = new Intl.DateTimeFormat().resolvedOptions().locale;
    const browserLocale = Object.keys(primeReactLocaleFiles)?.includes(searchElement) ? searchElement : 'pt-BR';
    const [selectedLocale, setSelectedLocale] = useState();
    const justifyOptions: JustifyOption[] = [
        { country: 'Chile', name: 'CL', value: 'es' },
        { country: 'Venezuela', name: 'VE', value: 'es' },
        { country: 'Brasil', name: 'BR', value: 'pt-BR' },
        { country: 'Paraguai', name: 'PY', value: 'es' },
        { country: 'Uruguai', name: 'UY', value: 'es' }
    ];
    // @ts-ignore
    const [value, setValue] = useState<>();
    useEffect(() => {
        // @ts-ignore
        addLocale(browserLocale, primeReactLocaleFiles[browserLocale]);
        // @ts-ignore
        setValue(browserLocale);
        locale(browserLocale);
        // @ts-ignore
        setSelectedLocale(locale());
        // @ts-ignore
        // @ts-ignore
    }, []);
    /**
     * Handles the change event when the locale is changed from a dropdown.
     *
     * @param {DropdownChangeEvent} e - The event triggered by changing the dropdown selection.
     */
    const onLocaleChange = async (e: SelectButtonChangeEvent) => {
        // Extract the selected locale key from the event
        setValue(e.value);
        const localeKey = e.value;

        const localeFile = primeReactLocaleFiles[localeKey];

        addLocale(localeKey, localeFile);

        locale(localeKey);
        setValue(localeKey);
        // @ts-ignore
        setSelectedLocale(locale());
    };


    const justifyTemplate = (option: JustifyOption) => {
        return <img
            alt={option.country}
            src="https://primefaces.org/cdn/primereact/images/flag/flag_placeholder.png"
            className={`flag flag-${option.name.toLowerCase()} mr-2`}
            style={{ width: '18px' }}
        />;
    };

    if (!selectedLocale) {
        return null;
    }

    return (
        <div className="flex align-items-center justify-content-center" id="cadastro">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6" id="cadastro-page">
                <div className="text-center mb-5">
                    <img src="/pv/images/logo/2-inteira branca.png" alt="hyper" height={150} />
                    <div className="text-6xl font-bold mb-3" id="bemvindo">
                        {/*@ts-ignore*/}
                        {selectedLocale.options.welcome}</div>
                    <SelectButton value={value} onChange={onLocaleChange} id="select-button-flag"
                                  itemTemplate={justifyTemplate} optionLabel="value" options={justifyOptions}
                    />
                </div>
                <CanasConexaoForm locale={selectedLocale} />
            </div>
        </div>
    );
}
