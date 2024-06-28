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
                    label: 'Usuários',
                    icon: 'pi pi-fw pi-sync',
                    to: '/usuarios'
                }
            ]
        }, {
            label: 'Cultos',
            items: [
                {
                    label: 'Domingo',
                    icon: 'pi pi-fw pi-users',
                    items: [
                        { label: 'Geral', icon: 'pi pi-fw pi-bookmark', to: '/domingo' },
                        { label: 'Noite', icon: 'pi pi-fw pi-bookmark', to: '/domingomanha' },
                        { label: 'Noite', icon: 'pi pi-fw pi-bookmark', to: '/domingonoite' }
                    ]
                },
                {
                    label: 'Quarta',
                    icon: 'pi pi-fw pi-map-marker',
                    to: '/quarta'
                }
            ]
        }, {
            label: 'Eventos',
            items: [
                {
                    label: 'Só para donzelas',
                    icon: 'pi pi-fw pi-sync',
                    to: '/soparaelas'
                },
                {
                    label: 'Pulse',
                    icon: 'pi pi-fw pi-sync',
                    to: '/pulse'
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
