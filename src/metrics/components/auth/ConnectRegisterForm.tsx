'use client';

import React, { useEffect, useRef, useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import GoogleAutoComplete from '@/metrics/components/form/GoogleAutoComplete';
import { APIProvider } from '@vis.gl/react-google-maps';
import { Button } from 'primereact/button';
import { ProgressSpinner } from 'primereact/progressspinner';
import { Message } from 'primereact/message';
import { Toast } from 'primereact/toast';
import { useRouter } from 'next/navigation';
import { initCadastroKids } from '@/metrics/components/auth/validationKids';
import axios from 'axios';
import {
    initCadastroConnect,
    validateCadastroConnect,
    ValidateCadastroConnect
} from '@/metrics/components/auth/validationConnect';
import { SelectButton } from 'primereact/selectbutton';
import { Dropdown } from 'primereact/dropdown';


interface ConnectRegisterFormProps {
    locale: any;
}

export default function ConnectRegisterForm(props: Readonly<ConnectRegisterFormProps>) {
    const toast = useRef(null);
    const { locale } = props;
    const { push } = useRouter();
    const [vCadastro, setVCadastro] = useState<ValidateCadastroConnect>(initCadastroConnect);
    const [isLoading, setIsLoading] = useState(false);
    const [showCadastro, setShowCadastro] = useState(false);
    const [connectsTypes, setConnectsTypes] = useState([]);
    const handleChange = (field: any, value: any) => {
        // @ts-ignore
        setVCadastro((prevState) => ({ ...prevState, form: { ...prevState?.form, [field]: value } }));
    };
    const [selectedConnectType, setSelectedConnectType] = useState(null);

    const handleBuscar = async () => {
            let axiosResponse = await axios.get(`/api/pco/search?phone=${vCadastro.form?.whatsapp}`);

            if (axiosResponse.status === 200) {
                let data = axiosResponse.data.attributes;
                console.log(data);
                // @ts-ignore
                setVCadastro((prevState) => ({
                    ...prevState,
                    form: {
                        ...prevState?.form,
                        firstName: data.first_name || '',
                        lastName: data.last_name || '',
                        birthDate: new Date(data.birthdate) || ''
                    }
                }));
                setShowCadastro(true);
            } else {
                setShowCadastro(true);
            }
        }
    ;
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
        vCadastro.errors = initCadastroKids.errors;

        let cadastro = await validateCadastroConnect(vCadastro);
        if (cadastro.isValid) {
            try {
                // let confirm = await CadastroService.sendCadastroKids(cadastro);
                push('/cadastro-confirmado?kidspv=true');
                if (true) {
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

    useEffect(() => {
        axios.get(`/api/pco/tiposconnects`).then((axiosResponse) => setConnectsTypes(axiosResponse.data));
    }, []);

    if (!locale) {
        return null;
    }
    // @ts-ignore
    return (
        <APIProvider apiKey="AIzaSyCdVvFlHiCZjhXPEl1lnj-zuyM2AilWO-o">
            <Toast ref={toast} position="center" />
            <div className="cadastro-form-kids" id="form-kids">
                <label htmlFor="whatsapp" className="block text-900 font-medium mb-2">Whatsapp&nbsp;
                    ({locale.options.required})</label>
                {vCadastro.errors?.whatsapp && <Message
                    severity="error" text={locale.options.errorField} className="w-full m-1" />}
                <PhoneInput
                    prefix=""
                    disabled={showCadastro}
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

                {!showCadastro &&
                    <Button
                        //@ts-ignore
                        label={isLoading ?
                            <ProgressSpinner style={{ maxWidth: '20px', maxHeight: '20px' }} strokeWidth="8"
                                             fill="var(--surface-ground)" animationDuration=".5s" />
                            : 'Buscar Cadastro'} icon="pi pi-user-plus" className="w-full"
                        onClick={handleBuscar} />}

                {showCadastro && (<>
                    <label htmlFor="firstName"
                           className="block text-900 font-medium mb-2">{locale.options.firstName}&nbsp;({locale.options.required})</label>
                    {vCadastro.errors?.firstName && <Message
                        severity="error" text={locale.options.errorField} className="w-full m-1" />}
                    <InputText id="firstName" type="text" placeholder={locale.options.firstName} className="w-full mb-3"
                               required value={vCadastro?.form?.firstName}
                               invalid={vCadastro.errors?.firstName}
                               onChange={(e) => handleChange('firstName', e.target.value)} />


                    <label htmlFor="lastName"
                           className="block text-900 font-medium mb-2">{locale.options.lastName}&nbsp;
                        ({locale.options.required})</label>
                    {vCadastro.errors?.lastName && <Message
                        severity="error" text={locale.options.errorField} className="w-full m-1" />}
                    <InputText id="lastName" type="text" placeholder={locale.options.lastName} className="w-full mb-3"
                               invalid={vCadastro.errors?.lastName}
                               required value={vCadastro?.form?.lastName}
                               onChange={(e) => handleChange('lastName', e.target.value)} />

                    <label htmlFor="birthDate"
                           className="block text-900 font-medium mb-2">{locale.options.birthDate}&nbsp;
                        ({locale.options.optional})</label>
                    {vCadastro.errors?.birthDate && <Message
                        severity="error" text={locale.options.errorField} className="w-full m-1" />}
                    <Calendar id="birthDate" showIcon touchUI selectionMode="single"
                              value={vCadastro?.form?.birthDate}
                              invalid={vCadastro.errors?.birthDate}
                              onChange={(e) => handleChange('birthDate', e.value)}
                              placeholder={locale.options.birthDate}
                              locale="pt-BR"
                              className="w-full mb-3" />

                    <label htmlFor="email" className="block text-900 font-medium mb-2">{locale.options.email}&nbsp;
                        ({locale.options.optional})</label>
                    {vCadastro.errors?.email && <Message
                        severity="error" text={locale.options.errorField} className="w-full m-1" />}
                    <InputText id="email" type="email" placeholder="Email" className="w-full mb-3" required
                               value={vCadastro?.form?.email}
                               invalid={vCadastro.errors?.email}
                               onChange={(e) => handleChange('email', e.target.value)} keyfilter="email" />

                    <label htmlFor="address" className="block text-900 font-medium mb-2">{locale.options.address}&nbsp;
                        ({locale.options.required})</label>
                    {vCadastro.errors?.address && <Message
                        severity="error" text={locale.options.errorField} className="w-full m-1" />}
                    <GoogleAutoComplete cadastro={vCadastro} onPlaceSelect={(e) => handleChange('address', e)}
                    />

                    <label htmlFor="married" className="block text-900 font-medium mb-2">{locale.options.married}?&nbsp;
                        ({locale.options.required})</label>
                    {vCadastro.errors?.married && <Message
                        severity="error" text={locale.options.errorField} className="w-full m-1" />}
                    <div
                        className="w-full text-center">
                        <SelectButton className="w-full mb-3" options={[locale.options.accept, locale.options.reject]}
                                      value={vCadastro?.form?.married ? locale.options.accept : locale.options.reject}
                                      invalid={vCadastro.errors?.married}
                                      onChange={event => handleChange('married', event.value == locale.options.accept)} />

                    </div>

                    <label htmlFor="gender" className="block text-900 font-medium mb-2">{locale.options.gender}&nbsp;
                        ({locale.options.required})</label>
                    {vCadastro.errors?.gender && <Message
                        severity="error" text={locale.options.errorField} className="w-full m-1" />}
                    <div
                        className="w-full text-center">
                        <SelectButton className="w-full mb-3" options={[locale.options.male, locale.options.female]}
                                      value={vCadastro?.form?.gender}
                                      invalid={vCadastro.errors?.gender}
                                      required
                                      onChange={event => handleChange('gender', event.value)} />
                    </div>

                    <label htmlFor="question_one"
                           className="block text-900 font-medium mb-2">{locale.options.question_one}&nbsp;
                        ({locale.options.optional})</label>
                    {vCadastro.errors?.married && <Message
                        severity="error" text={locale.options.errorField} className="w-full m-1" />}
                    <div
                        className="w-full text-center">
                        <SelectButton className="w-full mb-3" options={[locale.options.accept, locale.options.reject]}
                                      value={vCadastro?.form?.question_one ? locale.options.accept : locale.options.reject}
                                      invalid={vCadastro.errors?.married}
                                      onChange={event => handleChange('question_one', event.value == locale.options.accept)} />

                    </div>

                    <label htmlFor="question_two"
                           className="block text-900 font-medium mb-2">{locale.options.question_two}&nbsp;
                        ({locale.options.optional})</label>
                    {vCadastro.errors?.question_two && <Message
                        severity="error" text={locale.options.errorField} className="w-full m-1" />}
                    <div
                        className="w-full text-center">
                        <SelectButton className="w-full mb-3" options={[locale.options.accept, locale.options.reject]}
                                      value={vCadastro?.form?.question_two ? locale.options.accept : locale.options.reject}
                                      invalid={vCadastro.errors?.question_two}
                                      onChange={event => handleChange('question_two', event.value == locale.options.accept)} />

                    </div>

                    <label htmlFor="question_three"
                           className="block text-900 font-medium mb-2">{locale.options.question_three}&nbsp;
                        ({locale.options.required})</label>
                    {vCadastro.errors?.question_three && <Message
                        severity="error" text={locale.options.errorField} className="w-full m-1" />}
                    <div
                        className="w-full text-center">
                        <Dropdown value={selectedConnectType} onChange={(e) => setSelectedConnectType(e.value)}
                                  options={connectsTypes}
                                  optionLabel="question_three"
                                  placeholder="Selecione um tipo de connect" className="w-full mb-3" />
                    </div>

                    <Button
                        label={isLoading ?
                            <ProgressSpinner style={{ maxWidth: '20px', maxHeight: '20px' }} strokeWidth="8"
                                             fill="var(--surface-ground)" animationDuration=".5s" />
                            : locale.options.register} icon="pi pi-user-plus" className="w-full"
                        onClick={handleSubmit} />
                </>)}
            </div>
        </APIProvider>
    );
};
