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
                { label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' },
                {
                    label: 'Domingo',
                    icon: 'pi pi-fw pi-users',
                    to: '/domingo'
                },
                {
                    label: 'Domingo Manhã',
                    icon: 'pi pi-fw pi-money-bill',
                    to: '/domingomanha'
                },
                {
                    label: 'Domingo Noite',
                    icon: 'pi pi-fw pi-ticket',
                    to: '/domingonoite'
                },
                {
                    label: 'Quarta',
                    icon: 'pi pi-fw pi-map-marker',
                    to: '/quarta'
                },
                {
                    label: 'Só para donzelas',
                    icon: 'pi pi-fw pi-sync',
                    to: '/soparaelas'
                },
                {
                    label: 'Pulse',
                    icon: 'pi pi-fw pi-sync',
                    to: '/pulse'
                },
                {
                    label: 'Usuários',
                    icon: 'pi pi-fw pi-sync',
                    to: '/usuarios'
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
};

export default AppMenu;
