/* eslint-disable @next/next/no-img-element */
'use client';
import React, { useEffect, useState } from 'react';
import { addLocale, locale } from 'primereact/api';
import { getLocales } from '@/locales/getLocales';
import ConnectRegisterForm from '@/metrics/components/auth/ConnectRegisterForm';

interface LocaleFiles {
    [key: string]: any;
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
        <div className="flex align-items-center justify-content-center">
            <div className="surface-card p-4 shadow-2 border-round w-full lg:w-6" id="cadastro-page-connect">
                <div className="text-center mb-5">
                    <img src="/pv/images/logo/connects-logo-oficial-negativo.png" alt="hyper" height={150} />
                </div>
                <ConnectRegisterForm locale={selectedLocale} />
            </div>
        </div>
    );
}
