'use client';

import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import GoogleAutoComplete from '@/metrics/components/form/GoogleAutoComplete';
import { APIProvider } from '@vis.gl/react-google-maps';
import { initCadastro } from '@/metrics/components/auth/validation';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/navigation';
import {
    initCadastroCanas,
    validateCadastroCanas,
    ValidateCadastroCanas
} from '@/metrics/components/auth/canasvieiras/validationCanas';
import { CadastroServiceCanas } from '@/metrics/service/CadastroServiceCanas';


interface RegisterFormProps {
    locale: any;
}

export default function CanasConexaoForm(props: Readonly<RegisterFormProps>) {
    const toast = useRef(null);
    const { locale } = props;
    const { push } = useRouter();
    const [vCadastro, setVCadastro] = useState<ValidateCadastroCanas>(initCadastroCanas);
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (field: any, value: any) => {
        // @ts-ignore
        setVCadastro((prevState) => ({ ...prevState, form: { ...prevState?.form, [field]: value } }));
    };
    // @ts-ignore
    const countryProps = {
        buttonStyle: {
            minHeight: '2.9rem', minWidth: '4rem', borderRadius: '6px',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
        }
    };

    const handleSubmit = async () => {
        setIsLoading(true);
        // @ts-ignore
        vCadastro.errors = initCadastro.errors;

        let cadastro = await validateCadastroCanas(vCadastro);
        if (cadastro.isValid) {
            try {
                let confirm = await CadastroServiceCanas.sendCadastro(cadastro);
                if (confirm) {
                    push('/cadastro-confirmado');
                } else {
                    // @ts-ignore
                    toast.current.show({
                        severity: 'error',
                        summary: locale.options.errorSummary,
                        detail: locale.options.error,
                        life: 3000
                    });
                }
            } catch (e) {
                console.error(e);
                // @ts-ignore
                toast.current.show({
                    severity: 'error',
                    summary: locale.options.errorSummary,
                    detail: locale.options.error,
                    life: 3000
                });
            }
        } else {
            setVCadastro(cadastro);
        }
        setIsLoading(false);
    };

    if (!locale) {
        return null;
    }
    // @ts-ignore
    return (
        <APIProvider apiKey="AIzaSyCdVvFlHiCZjhXPEl1lnj-zuyM2AilWO-o">
            <Toast ref={toast} position="center" />
            <div className="cadastro-form">
                <label htmlFor="firstName"
                       className="block text-900 font-medium mb-2">{locale.options.firstName}({locale.options.required})</label>
                {vCadastro.errors?.firstName && <Message
                    severity="error" text={locale.options.errorField} className="w-full m-1" />}
                <InputText id="firstName" type="text" placeholder={locale.options.firstName} className="w-full mb-3"
                           required value={vCadastro?.form?.firstName}
                           invalid={vCadastro.errors?.firstName}
                           onChange={(e) => handleChange('firstName', e.target.value)} />

                <label htmlFor="lastName" className="block text-900 font-medium mb-2">{locale.options.lastName}
                    ({locale.options.required})</label>
                {vCadastro.errors?.lastName && <Message
                    severity="error" text={locale.options.errorField} className="w-full m-1" />}
                <InputText id="lastName" type="text" placeholder={locale.options.lastName} className="w-full mb-3"
                           invalid={vCadastro.errors?.lastName}
                           required value={vCadastro?.form?.lastName}
                           onChange={(e) => handleChange('lastName', e.target.value)} />

                <label htmlFor="whatsapp" className="block text-900 font-medium mb-2">Whatsapp
                    ({locale.options.required})</label>
                {vCadastro.errors?.whatsapp && <Message
                    severity="error" text={locale.options.errorField} className="w-full m-1" />}
                <PhoneInput
                    prefix=""
                    inputStyle={{
                        fontSize: '1rem',
                        border: '1px solid #d1d5db',
                        padding: '0.75rem 0.75rem',
                        transition: 'background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s',
                        fontFeatureSettings: 'var(--font-feature-settings, normal)',
                        appearance: 'none',
                        borderRadius: '6px',
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        fontWeight: 'normal',
                        margin: 0,
                        minHeight: '2.9rem'
                    }}
                    countrySelectorStyleProps={countryProps}
                    defaultCountry="br"
                    inputClassName="w-full p-component p-inputtext"
                    preferredCountries={['br', 've', 'cl', 'uy', 'ar']}
                    value={vCadastro?.form?.whatsapp}
                    onChange={(e) => {
                        handleChange('whatsapp', e);
                    }}
                    className="w-full mb-3"
                />

                <label htmlFor="address" className="block text-900 font-medium mb-2">{locale.options.address}
                    ({locale.options.required})</label>
                {vCadastro.errors?.address && <Message
                    severity="error" text={locale.options.errorField} className="w-full m-1" />}
                <GoogleAutoComplete cadastro={vCadastro} onPlaceSelect={(e) => handleChange('address', e)}
                />

                <label htmlFor="email" className="block text-900 font-medium mb-2">{locale.options.email}
                    ({locale.options.optional})</label>
                {vCadastro.errors?.email && <Message
                    severity="error" text={locale.options.errorField} className="w-full m-1" />}
                <InputText id="email" type="email" placeholder="Email" className="w-full mb-3" required
                           value={vCadastro?.form?.email}
                           invalid={vCadastro.errors?.email}
                           onChange={(e) => handleChange('email', e.target.value)} keyfilter="email" />
                <Button
                    label={isLoading ? <ProgressSpinner style={{ maxWidth: '20px', maxHeight: '20px' }} strokeWidth="8"
                                                        fill="var(--surface-ground)" animationDuration=".5s" />
                        : locale.options.register} icon="pi pi-user-plus" className="w-full"
                    onClick={handleSubmit} />
            </div>
        </APIProvider>
    );
}
