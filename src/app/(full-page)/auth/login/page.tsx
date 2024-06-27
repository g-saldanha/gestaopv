/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';
import LoginForm from '@/metrics/components/auth/LoginForm';

export default async function LoginPage() {
    const session = await getServerSession();

    if (session) {
        redirect('/');
    }

    return (
        <section>
            <LoginForm />;
        </section>
    );
}
