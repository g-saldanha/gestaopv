/* eslint-disable @next/next/no-img-element */
'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { getLocales } from '@/locales/getLocales';

interface LocaleFiles {
    [key: string]: any;
}

const primeReactLocaleFiles: LocaleFiles = getLocales;
export default function Cadastro() {
    return (
        <div className="surface-0 flex justify-content-center">
            <div id="home" className="landing-wrapper overflow-hidden">
                <div
                    id="hero"
                    className="flex flex-column pt-4 px-4 lg:px-8 overflow-hidden"
                    style={{
                        background: 'linear-gradient(0deg, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), radial-gradient(77.36% 256.97% at 77.36% 57.52%, #EEEFAF 0%, #C3E3FA 100%)',
                        clipPath: 'ellipse(150% 87% at 93% 13%)'
                    }}
                >
                    <div className="mx-4 md:mx-8 mt-0 md:mt-4">
                        <h1 className="text-3xl font-bold text-gray-900 line-height-2">
                            <span className="font-light block">Cadastro concluído com sucesso!</span>Bem-vindo à Palavra
                            Viva Church!
                        </h1>
                        <p className="font-normal text-0 line-height-3 md:mt-3 text-gray-700">Baixe agora o nosso
                            aplicativo (atualmente disponível em inglês) e fique por dentro de tudo o que acontece na
                            nossa comunidade! </p>
                        <div className="mb-3 text-center flex justify-content-aroung">
                            <a href="https://apps.apple.com/us/app/church-center-app/id1357742931?l=pt-BR">
                                <img src="/pv/images/landing/appstore.png" alt="appstore" width="150" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.ministrycentered.churchcenter&hl=pt_BR">
                                <img src="/pv/images/landing/playstore.png" alt="playstore" width="150" />
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-content-center md:justify-content-end">
                        <img src="/pv/images/landing/churchcenter.svg" alt="Hero"
                             className="w-7 md:w-auto" />
                    </div>
                </div>
            </div>
        </div>
    );
}
