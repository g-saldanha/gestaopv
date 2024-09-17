'use client';

import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { SelectButton } from 'primereact/selectbutton';
import Campus from '@/metrics/components/form/Campus';
import { InputNumber, InputNumberChangeEvent } from 'primereact/inputnumber';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Profissoes from '@/metrics/components/form/Profissoes';
import GoogleAutoComplete from '@/metrics/components/form/GoogleAutoComplete';
import { APIProvider } from '@vis.gl/react-google-maps';


interface RegisterFormProps {
    locale: any;
}

export default function RegisterForm(props: Readonly<RegisterFormProps>) {
    const { locale } = props;
    const [form, setForm] = useState<Form.Cadastro>();
    const [isChildren, setIsChildren] = useState(false);
    const [children, setChildren] = useState([]);
    const handleChange = (field: any, value: any) => {
        // @ts-ignore
        setForm((prevState) => ({ ...prevState, [field]: value }));
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
            children.push({ firstname: '', birthDate: '' }); // Cria uma cópia do objeto e insere no array
        }
        // @ts-ignore
        setChildren(children);
    };

    console.log(children);
    if (!locale) {
        return null;
    }

    // @ts-ignore
    return (
        <APIProvider apiKey="AIzaSyCdVvFlHiCZjhXPEl1lnj-zuyM2AilWO-o">
            <div className="cadastro-form">
                <label htmlFor="firstName"
                       className="block text-900 font-medium mb-2">{locale.options.firstName}({locale.options.required})</label>
                <InputText id="firstName" type="text" placeholder={locale.options.firstName} className="w-full mb-3"
                           required value={form?.firstName}
                           onChange={(e) => handleChange('firstName', e.target.value)} />

                <label htmlFor="lastName" className="block text-900 font-medium mb-2">{locale.options.lastName}
                    ({locale.options.required})</label>
                <InputText id="lastName" type="text" placeholder={locale.options.lastName} className="w-full mb-3"
                           required value={form?.lastName} onChange={(e) => handleChange('lastname', e.target.value)} />

                <label htmlFor="birthDate" className="block text-900 font-medium mb-2">{locale.options.birthDate}
                    ({locale.options.required})</label>
                <Calendar id="birthDate" showIcon required touchUI selectionMode="single"
                          value={form?.birthDate}
                          onChange={(e) => handleChange('birthDate', e.value)}
                          placeholder={locale.options.birthDate}
                          className="w-full mb-3" />
                <label htmlFor="whatsapp" className="block text-900 font-medium mb-2">Whatsapp
                    ({locale.options.required})</label>
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
                    value={form?.whatsapp}
                    onChange={(e) => {
                        handleChange('whatsapp', e);
                    }}
                    className="w-full mb-3"
                />

                <label htmlFor="email" className="block text-900 font-medium mb-2">{locale.options.email}
                    ({locale.options.optional})</label>
                <InputText id="email" type="email" placeholder="Email" className="w-full mb-3" required
                           value={form?.email} onChange={(e) => handleChange('email', e.target.value)} />

                <label htmlFor="address" className="block text-900 font-medium mb-2">{locale.options.address}
                    ({locale.options.required})</label>
                <GoogleAutoComplete onPlaceSelect={(e) => handleChange('address', e)}
                />
                {/*value={form?.email}*/}
                <label htmlFor="membership" className="block text-900 font-medium mb-2">{locale.options.membership}
                    ({locale.options.required})</label>
                <div
                    className="w-full text-center">
                    <SelectButton
                        id="membership"
                        className="w-full mb-3"
                        options={[locale.options.regular, locale.options.volunteer]}
                        onChange={event => handleChange('volunteer', event.value == locale.options.volunteer)}
                    />
                </div>

                <label htmlFor="married" className="block text-900 font-medium mb-2">{locale.options.married}?
                    ({locale.options.required})</label>
                <div
                    className="w-full text-center">
                    <SelectButton className="w-full mb-3" options={[locale.options.accept, locale.options.reject]}
                                  value={form?.married ? locale.options.accept : locale.options.reject}
                                  onChange={event => handleChange('married', event.value == locale.options.accept)} />
                </div>
                {form?.married && (
                    <>
                        <label htmlFor="anniversary"
                               className="block text-900 font-medium mb-2">{locale.options.anniversary}
                            ({locale.options.optional})</label>
                        <Calendar id="anniversary" showIcon required touchUI selectionMode="single"
                                  placeholder={locale.options.anniversary}
                                  className="w-full mb-3" onChange={(e) => handleChange('anniversary', e.value)} />
                    </>
                )
                }

                <label htmlFor="filhos" className="block text-900 font-medium mb-2">{locale.options.havechildren}
                    ({locale.options.optional})</label>
                <div className="w-full text-center">
                    <SelectButton className="w-full mb-3" options={[locale.options.accept, locale.options.reject]}
                                  onChange={event => setIsChildren(event.value === locale.options.accept)} />
                </div>
                {isChildren && <><label htmlFor="quantos"
                                        className="block text-900 font-medium mb-2">{locale.options.howmany}
                    ({locale.options.optional})</label>

                    <InputNumber
                        inputId="quantos"
                        onChange={(e: InputNumberChangeEvent) => {
                            // @ts-ignore
                            if (e.value <= 4) {
                                // @ts-ignore
                                handleChooseChildren(e.value);
                            }
                        }}
                        useGrouping={false} min={0} max={4} className="w-full mb-3" /></>}

                {children.map((child, idx) => {
                    return (<>
                        <label htmlFor="firstname"
                               className="block text-900 font-medium mb-2">{idx + 1} - {locale.options.firstName}
                            ({locale.options.required})</label>
                        <InputText id="firstname" type="text" placeholder={locale.options.firstName}
                                   className="w-full mb-3"
                                   onChange={(event) => handleChangeChildren('firstName', event.target.value, idx)}
                                   required />
                        <label htmlFor="birthDate"
                               className="block text-900 font-medium mb-2">{idx + 1} - {locale.options.birthDate}
                            ({locale.options.required})</label>
                        <Calendar id="birthDate" showIcon required touchUI selectionMode="single"
                                  className="w-full mb-3"
                                  placeholder={locale.options.birthDate}
                                  onChange={(event) => handleChangeChildren('birthDate', event.value, idx)} />
                    </>);
                })}

                <label htmlFor={locale.options.campus}
                       className="block text-900 font-medium mb-2">{locale.options.campus}({locale.options.required})</label>
                <Campus handleCampus={handleChange} />
                <label htmlFor="job"
                       className="block text-900 font-medium mb-2">{locale.options.job}</label>
                <Profissoes />
            </div>
        </APIProvider>
    );
}
