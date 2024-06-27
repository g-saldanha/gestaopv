'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { zodResolver } from '@hookform/resolvers/zod';
import { Controller, useForm } from 'react-hook-form';
import * as z from 'zod';
import React, { useContext, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { LayoutContext } from '@/layout/context/layoutcontext';
import { classNames } from 'primereact/utils';
import { Toast } from 'primereact/toast';

const FormSchema = z.object({
    email: z.string().email({
        message: 'Invalid email address.'
    }),
    password: z.string().min(6, {
        message: 'Password must be at least 6 characters.'
    })
});

type FormData = z.infer<typeof FormSchema>;

export default function LoginForm() {
    const router = useRouter();
    const toast = useRef<Toast>(null);
    const { layoutConfig } = useContext(LayoutContext);
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', { 'p-input-filled': layoutConfig.inputStyle === 'filled' });

    const form = useForm({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: '',
            password: ''
        }
    });

    const onSubmit = async (data: FormData) => {
        console.log('Submitting form', data);

        const { email, password } = data;

        try {
            const response: any = await signIn('credentials', {
                email,
                password,
                redirect: false
            });
            console.log({ response });
            if (!response?.error) {
                router.push('/');
                router.refresh();
            }

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Process response here
            console.log('Login Successful', response);
            // @ts-ignore
            toast.current.show({
                severity: 'success',
                summary: 'Login Realizado',
                detail: 'Login Realizado com Sucesso',
                life: 3000
            });
        } catch (error: any) {
            // @ts-ignore
            toast.current.show({
                severity: 'error',
                summary: 'Login Falhou',
                detail: error.message,
                life: 3000
            });
            console.error('Login Failed:', error);
        }
    };

    return (
        <div className={containerClassName}>
            <Toast ref={toast} />
            <div className="flex flex-column align-items-center justify-content-center">
                <img src={`/layout/images/logo/2-inteira preta.png`} alt="Wed logo"
                     className="mb-5 w-24rem flex-shrink-0" />
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, var(--primary-color) 10%, rgba(33, 150, 243, 0) 30%)'
                    }}
                >
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            <img src="/layout/images/logo/logo-preta.png" alt="Wed Logo" height="100"
                                 className="mb-3" />
                            <div className="text-900 text-3xl font-medium mb-3">Olá, Gestor!</div>
                            <span className="text-600 font-medium">Faça o Login para continuar</span>
                        </div>

                        <div>
                            <form onSubmit={form.handleSubmit(onSubmit)}>
                                <label htmlFor="email" className="block text-900 text-xl font-medium mb-2">
                                    Email
                                </label>
                                <Controller
                                    name="email"
                                    control={form.control}
                                    defaultValue=""
                                    rules={{ required: 'Email é Obrigatório' }}
                                    render={({ field }) => <InputText id="email" type="email"
                                                                      placeholder="Digite o email"
                                                                      className="w-full md:w-30rem mb-5 form-control"
                                                                      style={{ padding: '1rem' }} {...field} />}
                                />
                                {/*<InputText id="email" type="email" placeholder="Digite o email" className="w-full md:w-30rem mb-5 form-control" style={{ padding: '1rem' }} {...form.register('email', { required: 'Email é obrigatório' })} />*/}

                                <label htmlFor="password" className="block text-900 font-medium text-xl mb-2">
                                    Senha
                                </label>
                                <Controller
                                    name="password"
                                    control={form.control}
                                    defaultValue=""
                                    rules={{ required: 'Senha é Obrigatória' }}
                                    render={({ field }) => <Password inputId="password" placeholder="Password"
                                                                     toggleMask className="w-full mb-5 form-control"
                                                                     inputClassName="w-full p-3 md:w-30rem" {...field}></Password>}
                                />
                                {/*<Password*/}
                                {/*    required*/}
                                {/*    inputId="password"*/}
                                {/*    placeholder="Password"*/}
                                {/*    toggleMask*/}
                                {/*    className="w-full mb-5 form-control"*/}
                                {/*    inputClassName="w-full p-3 md:w-30rem"*/}
                                {/*    {...form.register('password', { required: 'Senha é Obrigatória' })}*/}
                                {/*></Password>*/}

                                <Button className="w-full p-3 text-xl" type="submit"
                                        disabled={form.formState.isSubmitting}>
                                    {form.formState.isSubmitting ? 'Entrando....' : 'Entrar'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
