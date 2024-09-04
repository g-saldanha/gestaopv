'use client';


import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Calendar } from 'primereact/calendar';
import { SelectButton } from 'primereact/selectbutton';
import Campus from '@/metrics/components/form/Campus';
import { InputNumber, InputNumberValueChangeEvent } from 'primereact/inputnumber';
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import Profissoes from '@/metrics/components/form/Profissoes';


interface RegisterFormProps {
    locale: any;
}

export default function RegisterForm(props: Readonly<RegisterFormProps>) {
    const { locale } = props;
    const [form, setForm] = useState<Form.Cadastro>();
    const handleChange = (field: any, value: any) => {
        // @ts-ignore
        setForm((prevState) => ({ ...prevState, [field]: value }));
    };
    console.log(form);
    // @ts-ignore
    const countryProps = {
        buttonStyle: {
            minHeight: '2.9rem', minWidth: '4rem', borderRadius: '6px',
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0
        }
    };


    if (!locale) {
        return null;
    }

    return (
        <div className="cadastro-form">
            <label htmlFor="firstName"
                   className="block text-900 font-medium mb-2">{locale.options.firstName}({locale.options.required})</label>
            <InputText id="firstName" type="text" placeholder={locale.options.firstName} className="w-full mb-3"
                       required value={form?.firstName} onChange={(e) => handleChange('firstName', e.target.value)} />

            <label htmlFor="lastName" className="block text-900 font-medium mb-2">{locale.options.lastName}
                ({locale.options.required})</label>
            <InputText id="lastName" type="text" placeholder={locale.options.lastName} className="w-full mb-3"
                       required value={form?.lastName} onChange={(e) => handleChange('lastname', e.target.value)} />

            <label htmlFor="birthDate" className="block text-900 font-medium mb-2">{locale.options.birthDate}
                ({locale.options.required})</label>
            <Calendar id="birthDate" showIcon required touchUI selectionMode="single"
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
                onChange={(e) => {
                }}
                className="w-full mb-3"
            />

            <label htmlFor="email" className="block text-900 font-medium mb-2">{locale.options.email}
                ({locale.options.optional})</label>
            <InputText id="email" type="email" placeholder="Email" className="w-full mb-3" required
                       value={form?.email} onChange={(e) => handleChange('email', e.target.value)} />

            <label htmlFor="membership" className="block text-900 font-medium mb-2">{locale.options.membership}
                ({locale.options.required})</label>
            <div
                className="w-full text-center">
                <SelectButton
                    id="membership"
                    className="w-full mb-3"
                    options={[locale.options.regular, locale.options.volunteer]} />
            </div>

            <label htmlFor="married" className="block text-900 font-medium mb-2">{locale.options.married}?
                ({locale.options.required})</label>
            <div
                className="w-full text-center">
                <SelectButton className="w-full mb-3" options={[locale.options.accept, locale.options.reject]} />
            </div>

            <label htmlFor="anniversary" className="block text-900 font-medium mb-2">{locale.options.anniversary}
                ({locale.options.optional})</label>
            <Calendar id="anniversary" showIcon required touchUI selectionMode="single"
                      placeholder={locale.options.anniversary}
                      className="w-full mb-3" />

            <label htmlFor="filhos" className="block text-900 font-medium mb-2">{locale.options.havechildren}
                ({locale.options.optional})</label>
            <div className="w-full text-center">
                <SelectButton className="w-full mb-3" options={[locale.options.accept, locale.options.reject]} />
            </div>


            <label htmlFor="quantos" className="block text-900 font-medium mb-2">{locale.options.howmany}
                ({locale.options.optional})</label>
            <InputNumber inputId="quantos" onValueChange={(e: InputNumberValueChangeEvent) => () => (e.value)}
                         useGrouping={false} min={0} max={4} className="w-full mb-3" />

            <label htmlFor="firstname" className="block text-900 font-medium mb-2">Nome
                ({locale.options.required})</label>
            <InputText id="firstname" type="text" placeholder="Nome" className="w-full mb-3" required />

            <label htmlFor="birthdate" className="block text-900 font-medium mb-2">Nascimento
                ({locale.options.required})</label>
            <Calendar id="birthdate" showIcon required touchUI selectionMode="single" placeholder="Nascimento"
                      className="w-full mb-3" />

            <label htmlFor={locale.options.campus}
                   className="block text-900 font-medium mb-2">{locale.options.campus}({locale.options.required})</label>
            <Campus />
            <label htmlFor="job"
                   className="block text-900 font-medium mb-2">{locale.options.job}</label>
            <Profissoes />
        </div>
    );
}
