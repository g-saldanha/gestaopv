/* eslint-disable @next/next/no-img-element */

import React from 'react';
import AppMenuitem from './AppMenuitem';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '../../types';

const AppMenu = () => {
        const model: AppMenuItem[] = [
            {
                label: 'Home',
                items: [
                    { label: 'Dashboard', icon: 'pi pi-fw pi-chart-bar', to: '/', disabled: true },
                    {
                        label: 'Organogramas', icon: 'pi pi-fw pi-sitemap', items: [{
                            label: 'Local', icon: 'pi pi-fw pi-sitemap', to: '/local'
                        }, {
                            label: 'Integrais', icon: 'pi pi-fw pi-sitemap', to: '/integrais', disabled: true
                        }, {
                            label: 'Líderes de Culto', icon: 'pi pi-fw pi-sitemap', to: '/lideresculto'
                        }, {
                            label: 'Líderes de Comunidades',
                            icon: 'pi pi-fw pi-sitemap',
                            to: '/liderescomunidades',
                            disabled: true
                        }, {
                            label: 'Líderes de Departamento',
                            icon: 'pi pi-fw pi-sitemap',
                            to: '/lideresdepartamento',
                            disabled: true
                        }]
                    }

                    // {
                    //     label: 'Usuários',
                    //     icon: 'pi pi-fw pi-users',
                    //     to: '/usuarios'
                    // }
                ]
            }, {
                label: 'Cultos',
                items: [
                    {
                        label: 'Domingo',
                        icon: 'pi pi-fw pi-users',
                        items: [
                            { label: 'Geral', icon: 'pi pi-fw pi-verified', to: '/domingo' },
                            { label: 'Manhã', icon: 'pi pi-fw pi-sun', to: '/domingomanha' },
                            { label: 'Noite', icon: 'pi pi-fw pi-moon', to: '/domingonoite' }
                        ]
                    },
                    {
                        label: 'Quarta',
                        icon: 'pi pi-fw pi-chart-line',
                        to: '/quarta'
                    }
                ]
            }, {
                label: 'Eventos',
                items: [
                    {
                        label: 'Só para donzelas',
                        icon: 'pi pi-fw pi-dollar',
                        to: '/soparaelas'
                    },
                    {
                        label: 'Galera',
                        icon: 'pi pi-fw pi-tiktok',
                        to: '/galera'
                    },
                    {
                        label: 'Pulse',
                        icon: 'pi pi-fw pi-wifi',
                        to: '/pulse'
                    }
                ]
            }, {
                label: 'Membresia',
                items: [
                    {
                        label: 'Demografia',
                        icon: 'pi pi-fw pi-dollar',
                        to: '/demografia'
                    }
                ]
            }
        ];

        return (
            <MenuProvider>
                <ul className="layout-menu">
                    {model.map((item, i) => {
                        return !item?.seperator ? <AppMenuitem item={item} root={true} index={i} key={item.label} /> :
                            <li className="menu-separator"></li>;
                    })}
                </ul>
            </MenuProvider>
        );
    }
;

export default AppMenu;
;
;
;
;
