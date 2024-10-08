import { campusesResponse } from '@/metrics/utils/pco';
import { transformCadastro } from '@/metrics/components/auth/transform';
import { ValidateCadastro } from '@/metrics/components/auth/validation';

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

async function sendToPCO(form: ValidateCadastro): Promise<boolean> {
    let toSend = transformCadastro(form);
    console.log(toSend);
    const res = await fetch(`/api/pco`, {
        method: 'POST',
        body: JSON.stringify(toSend)
    });
    return await res.json() as boolean;
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
    },
    async sendCadastro(form: ValidateCadastro) {
        return await sendToPCO(form);
    }
};
