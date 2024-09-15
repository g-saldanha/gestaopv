import { campusesResponse } from '@/metrics/utils/pco';

export interface Campuses {
    value: string,
    label: string,
    country: string
}

async function getCampuses(): Promise<Campuses[]> {
    const res = await fetch(`/api/campus`, {
        headers: { 'Cache-Control': 'no-cache' },
        method: 'GET'
    });
    return await res.json() as Campuses[];
}

async function checkWhatsapp(numero: string): Promise<boolean> {
    const res = await fetch(`/api/whatsapp?zap=${numero}`, {
        headers: { 'Cache-Control': 'no-cache' },
        method: 'GET'
    });
    return await res.json() as boolean;
}

function getCampusesMem(): Campuses[] {
    return campusesResponse.data.map(campus => ({
        value: campus.id,
        label: campus.attributes.name === 'Palavra Viva Church' ? 'Sede Capoeiras' : campus.attributes.name.replace('Palavra Viva ', ''),
        country: campus.attributes.country
    }));
}

export const CadastroService = {
    async getCampuses() {
        return await getCampuses();
    },
    async checkWhatsapp(numero: string) {
        return await checkWhatsapp(numero);
    },
    getCampusesMem() {
        return getCampusesMem();
    }
};
