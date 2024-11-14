'use client';

import React, { useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { InputNumber, InputNumberChangeEvent } from 'primereact/inputnumber';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import GoogleAutoComplete from '@/metrics/components/form/GoogleAutoComplete';
import { APIProvider } from '@vis.gl/react-google-maps';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';
import { CadastroService } from '@/metrics/service/CadastroService';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/navigation';
import { initCadastroKids, validateCadastroKids, ValidateCadastroKids } from '@/metrics/components/auth/validationKids';


interface KidsRegisterFormProps {
    locale: any;
}

export default function KidsRegisterForm(props: Readonly<KidsRegisterFormProps>) {
    const toast = useRef(null);
    const { locale } = props;
    const { push } = useRouter();
    const [vCadastro, setVCadastro] = useState<ValidateCadastroKids>(initCadastroKids);
    const [children, setChildren] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const handleChange = (field: any, value: any) => {
        // @ts-ignore
        setVCadastro((prevState) => ({ ...prevState, form: { ...prevState?.form, [field]: value } }));
    };
    const handleChangeChildren = (field: any, value: any, index: number) => {
        // @ts-ignore
        setChildren((prevState) => {
            if (prevState) {
                // @ts-ignore
                prevState[index][field] = value;
            }
            return prevState;
        });
    };
    // @ts-ignore
    const countryProps = {
        buttonStyle: {
            minHeight: '2.9rem', minWidth: '4rem', borderRadius: '6px',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
        }
    };

    const handleChooseChildren = (value: number) => {
        const children = [];
        for (let i = 0; i < value; i++) {
            children.push({ firstName: '', birthDate: '' }); // Cria uma cópia do objeto e insere no array
        }
        // @ts-ignore
        setChildren(children);
    };
    const handleSubmit = async () => {
        setIsLoading(true);
        // @ts-ignore
        vCadastro.errors = initCadastroKids.errors;

        if (children.length > 0) {
            // @ts-ignore
            vCadastro.form.children = children;
        }

        let cadastro = await validateCadastroKids(vCadastro);
        if (cadastro.isValid) {
            try {
                if (children.length > 0) {
                    // @ts-ignore
                    cadastro.form.children = children;
                }
                let confirm = await CadastroService.sendCadastroKids(cadastro);
                if (confirm) {
                    push('/cadastro-confirmado?kidspv=true');
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
            <div className="cadastro-form-kids" id="form-kids">
                <label htmlFor="firstName"
                       className="block text-900 font-medium mb-2">{`${locale.options.firstName} do ${locale.options.father_kids} (${locale.options.required})`}</label>
                {vCadastro.errors?.firstName && <Message
                    severity="error" text={locale.options.errorField} className="w-full m-1" />}
                <InputText id="firstName" type="text" placeholder={locale.options.firstName} className="w-full mb-3"
                           required value={vCadastro?.form?.firstName}
                           invalid={vCadastro.errors?.firstName}
                           onChange={(e) => handleChange('firstName', e.target.value)} />


                <label htmlFor="lastName"
                       className="block text-900 font-medium mb-2">{`${locale.options.lastName} do ${locale.options.father_kids} (${locale.options.required})`}</label>
                {vCadastro.errors?.lastName && <Message
                    severity="error" text={locale.options.errorField} className="w-full m-1" />}
                <InputText id="lastName" type="text" placeholder={locale.options.lastName} className="w-full mb-3"
                           invalid={vCadastro.errors?.lastName}
                           required value={vCadastro?.form?.lastName}
                           onChange={(e) => handleChange('lastName', e.target.value)} />

                <label htmlFor="birthDate"
                       className="block text-900 font-medium mb-2">{`${locale.options.birthDate} do ${locale.options.father_kids} (${locale.options.optional})`}</label>
                {vCadastro.errors?.birthDate && <Message
                    severity="error" text={locale.options.errorField} className="w-full m-1" />}
                <Calendar id="birthDate" showIcon touchUI selectionMode="single"
                          value={vCadastro?.form?.birthDate}
                          invalid={vCadastro.errors?.birthDate}
                          onChange={(e) => handleChange('birthDate', e.value)}
                          placeholder={locale.options.birthDate}
                          locale="pt-BR"
                          className="w-full mb-3" />
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
                    preferredCountries={['br', 've', 'ht', 'us', 'gb', 'pt', 'it', 'de', 'cl', 'uy']}
                    value={vCadastro?.form?.whatsapp}
                    onChange={(e) => {
                        handleChange('whatsapp', e);
                    }}
                    className="w-full mb-3"
                />

                <label htmlFor="email" className="block text-900 font-medium mb-2">{locale.options.email}
                    ({locale.options.optional})</label>
                {vCadastro.errors?.email && <Message
                    severity="error" text={locale.options.errorField} className="w-full m-1" />}
                <InputText id="email" type="email" placeholder="Email" className="w-full mb-3" required
                           value={vCadastro?.form?.email}
                           invalid={vCadastro.errors?.email}
                           onChange={(e) => handleChange('email', e.target.value)} keyfilter="email" />

                <label htmlFor="address" className="block text-900 font-medium mb-2">{locale.options.address}
                    ({locale.options.required})</label>
                {vCadastro.errors?.address && <Message
                    severity="error" text={locale.options.errorField} className="w-full m-1" />}
                <GoogleAutoComplete cadastro={vCadastro} onPlaceSelect={(e) => handleChange('address', e)}
                />

                <label htmlFor="quantos"
                       className="block text-900 font-medium mb-2">{locale.options.howmanychildren}
                    ({locale.options.required})</label>
                {vCadastro.errors?.children && <Message
                    severity="error" text={locale.options.errorField} className="w-full m-1" />}

                <InputNumber
                    inputId="quantos"
                    required
                    invalid={vCadastro.errors?.children}
                    onChange={(e: InputNumberChangeEvent) => {
                        // @ts-ignore
                        if (e.value <= 4) {
                            // @ts-ignore
                            handleChooseChildren(e.value);
                        }
                    }}
                    useGrouping={false} min={0} max={4} className="w-full mb-3" />

                {children.map((child, idx) => {
                    return (<>
                        <label htmlFor="firstname"
                               className="block text-900 font-medium mb-2">{idx + 1} - {locale.options.firstName}
                            ({locale.options.required})</label>
                        {vCadastro.errors?.children && <Message
                            severity="error" text={locale.options.errorField} className="w-full m-1" />}
                        <InputText id="firstname" type="text" placeholder={locale.options.firstName}
                                   className="w-full mb-3"
                                   invalid={vCadastro.errors?.children}
                                   onChange={(event) => handleChangeChildren('firstName', event.target.value, idx)}
                                   required />
                        <label htmlFor="birthDate"
                               className="block text-900 font-medium mb-2">{idx + 1} - {locale.options.birthDate}
                            ({locale.options.required})</label>
                        {vCadastro.errors?.children && <Message
                            severity="error" text={locale.options.errorField} className="w-full m-1" />}
                        <Calendar id="birthDate"
                                  showIcon
                                  required
                                  touchUI
                                  selectionMode="single"
                                  className="w-full mb-3"
                                  invalid={vCadastro.errors?.children}
                                  placeholder={locale.options.birthDate}
                                  locale="pt-BR"
                                  onChange={(event) => handleChangeChildren('birthDate', event.value, idx)} />
                    </>);
                })}
                <Button
                    label={isLoading ? <ProgressSpinner style={{ maxWidth: '20px', maxHeight: '20px' }} strokeWidth="8"
                                                        fill="var(--surface-ground)" animationDuration=".5s" />
                        : locale.options.register} icon="pi pi-user-plus" className="w-full"
                    onClick={handleSubmit} />
            </div>
        </APIProvider>
    );
}
