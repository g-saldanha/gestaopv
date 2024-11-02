/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import { addLocale, locale } from 'primereact/api';
import { getLocales } from '@/locales/getLocales';
import KidsRegisterForm from '@/metrics/components/auth/KidsRegisterForm';

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
    const browserLocale = 'pt-BR';
    const [selectedLocale, setSelectedLocale] = useState();
    // @ts-ignore
    useEffect(() => {
        // @ts-ignore
        addLocale(browserLocale, primeReactLocaleFiles[browserLocale]);
        // @ts-ignore
        locale(browserLocale);
        // @ts-ignore
        setSelectedLocale(locale());
        // @ts-ignore
        // @ts-ignore
    }, []);

    if (!selectedLocale) {
        return null;
    }

    return (
        <div className="flex align-items-center justify-content-center" id="cadastro-kids">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6" id="cadastro-page-kids">
                <div className="text-center mb-5">
                    <img src="/pv/images/logo/kids.png" alt="hyper" height={150} />
                </div>
                <KidsRegisterForm locale={selectedLocale} />
            </div>
        </div>
    );
}
