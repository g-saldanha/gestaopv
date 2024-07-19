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
        url: 'https://gestao.weddigital.com.br',
        description: 'Gerenciador detalhado de gestão Palavra Viva',
        images: ['https://www.palavravivachurch.org/wp-content/themes/pvsede/lib/img/sprite-pvsede.svg'],
        ttl: 604800
    },
    icons: {
        icon: '/favicon.ico'
    }
};

export default async function AppLayout({ children }: AppLayoutProps) {
    return <Layout>{children}</Layout>;
}
