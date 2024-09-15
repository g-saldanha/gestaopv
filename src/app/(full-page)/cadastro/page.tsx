/* eslint-disable @next/next/no-img-element */
'use client';
import { Button } from 'primereact/button';
import React, { useEffect, useState } from 'react';
import RegisterForm from '@/metrics/components/auth/RegisterForm';
import { addLocale, locale } from 'primereact/api';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';
import { getLocales } from '@/locales/getLocales';

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
    const browserLocale = Object.keys(primeReactLocaleFiles)?.includes(navigator.languages?.[0] || navigator.language) ? navigator.languages?.[0] || navigator.language : 'pt-BR';
    const osLocale = new Intl.DateTimeFormat().resolvedOptions().locale;
    const [selectedLocale, setSelectedLocale] = useState();
    const justifyOptions: JustifyOption[] = [
        { country: 'Espanha', name: 'ES', value: 'es' },
        { country: 'França', name: 'FR', value: 'fr' },
        { country: 'Brasil', name: 'BR', value: 'pt-BR' },
        { country: 'Estados Unidos', name: 'US', value: 'en-US' },
        { country: 'Itália', name: 'IT', value: 'it' }
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
        console.log('Browser locale: ', browserLocale);
        console.log('OS locale: ', osLocale);
        // @ts-ignore
        console.log('Locale', locale());
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

                <RegisterForm locale={selectedLocale} />
                {/*@ts-ignore*/}
                <Button label={selectedLocale.options.register} icon="pi pi-user-plus" className="w-full" />
            </div>
        </div>
    );
}
