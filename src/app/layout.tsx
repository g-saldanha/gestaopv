import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { PrimeReactProvider } from 'primereact/api';
import React from 'react';
import { LayoutProvider } from '@/layout/context/layoutcontext';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import 'primeicons/primeicons.css';
import '../styles/layout/layout.scss';
import '../styles/demo/Demos.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Palavra Viva Church Gestão',
    description: 'Gerenciador Church Metrics detalhado'
};

export default async function RootLayout({
                                             children
                                         }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" suppressHydrationWarning>
        <head>
            <link id="theme-css" href={`/themes/lara-light-indigo/theme.css`} rel="stylesheet"></link>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <title>Palavra Viva Church Gestão</title>
        </head>
        <body className={inter.className}>
        <PrimeReactProvider>
            <LayoutProvider>{children}</LayoutProvider>
        </PrimeReactProvider>
        </body>
        </html>
    );
}
