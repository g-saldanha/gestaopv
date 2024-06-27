/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import { LayoutContext } from './context/layoutcontext';

const AppFooter = () => {
    const { layoutConfig } = useContext(LayoutContext);

    return (
        <div className="layout-footer">
            <img src={`/layout/images/logo/palavra viva 2${layoutConfig.colorScheme === 'light' ? '_preto' : ''}.png`}
                 alt="Logo"
                 height="20" className="mr-2" />
            by
            <span className="font-medium ml-2"><a href="https://github.com/g-saldanha"
                                                  target="_blank">Saldanha</a></span>
        </div>
    );
};

export default AppFooter;
