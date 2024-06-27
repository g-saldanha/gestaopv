import { Metadata } from 'next';
import Layout from '../../layout/layout';

interface AppLayoutProps {
    children: React.ReactNode;
}

export const metadata: Metadata = {
    title: 'Palavra Viva Church Gestão',
    description: 'Gerenciador Church Metrics detalhado',
    robots: { index: false, follow: false },
    openGraph: {
        type: 'website',
        title: 'Palavra Viva Church Gestão',
        url: 'https://wedadmin.weddigital.com.br',
        description: 'Gerenciador Church Metrics detalhado',
        images: ['https://weddigital.com.br/static/media/logo-weddigital.0645902689ed62a4fbd5.png'],
        ttl: 604800
    },
    icons: {
        icon: '/favicon.ico'
    }
};

export default async function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
