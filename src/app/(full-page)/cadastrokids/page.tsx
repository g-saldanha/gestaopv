/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import { addLocale, locale } from 'primereact/api';
import { getLocales } from '@/locales/getLocales';
import KidsRegisterForm from '@/metrics/components/auth/KidsRegisterForm';
import { SelectButton, SelectButtonChangeEvent } from 'primereact/selectbutton';

interface LocaleFiles {
    [key: string]: any;
}

interface JustifyOption {
    country: string;
    value: string;
    name: string;
}

const primeReactLocaleFiles: LocaleFiles = getLocales;
export default function CadastroKids() {
    // const browserLocale = Object.keys(primeReactLocaleFiles)?.includes(navigator.languages?.[0] || navigator.language) ? navigator.languages?.[0] || navigator.language : 'pt-BR';
    let searchElement = new Intl.DateTimeFormat().resolvedOptions().locale;
    const browserLocale = Object.keys(primeReactLocaleFiles)?.includes(searchElement) ? searchElement : 'pt-BR';
    const [selectedLocale, setSelectedLocale] = useState();
    const justifyOptions: JustifyOption[] = [
        { country: 'Dinamarca', name: 'DK', value: 'da' },
        { country: 'Espanha', name: 'ES', value: 'es' },
        { country: 'França', name: 'FR', value: 'fr' },
        { country: 'Brasil', name: 'BR', value: 'pt-BR' },
        { country: 'Estados Unidos', name: 'US', value: 'en-US' },
        { country: 'Itália', name: 'IT', value: 'it' },
        { country: 'Alemão', name: 'DE', value: 'de' }
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
        <div className="flex align-items-center justify-content-center" id="cadastro-kids">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6" id="cadastro-page-kids">
                <div className="text-center mb-5">
                    <img src="/pv/images/logo/kids.png" alt="hyper" height={150} />
                    <SelectButton value={value} onChange={onLocaleChange} id="select-button-flag"
                                  itemTemplate={justifyTemplate} optionLabel="value" options={justifyOptions}
                    />
                </div>
                <KidsRegisterForm locale={selectedLocale} />
            </div>
        </div>
    );
}
