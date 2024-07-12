import { Constantes } from '@/metrics/utils/Constantes';

interface cultos {
    last: Metrics.Culto[];
    now: Metrics.Culto[];
}

const sortByDate = (a: any, b: any) => a.data - b.data;
export const CultosService = {
    async getDomingos(year: number) {
        const res = await fetch(`/api/cultos?ano=${year}&servicesId=${JSON.stringify([Constantes.CULTO_DOMINGO_MANHA, Constantes.CULTO_DOMINGO_NOITE])}`, {
            headers: { 'Cache-Control': 'no-cache' },
            method: 'GET'
        });
        let cultos = await res.json() as cultos;
        cultos.now = cultos.now.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
        cultos.last = cultos.last.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
        return cultos;
    },
    async getQuartas(year: number) {
        const res = await fetch(`/api/cultos?ano=${year}&servicesId=${JSON.stringify([Constantes.CULTO_QUARTA])}`, {
            headers: { 'Cache-Control': 'no-cache' },
            method: 'GET'
        });
        let cultos = await res.json() as cultos;
        cultos.now = cultos.now.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
        cultos.last = cultos.last.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
        return cultos;
    },
    async getDomingosManha(year: number) {
        const res = await fetch(`/api/cultos?ano=${year}&servicesId=${JSON.stringify([Constantes.CULTO_DOMINGO_MANHA])}`, {
            headers: { 'Cache-Control': 'no-cache' },
            method: 'GET'
        });
        let cultos = await res.json() as cultos;
        cultos.now = cultos.now.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
        cultos.last = cultos.last.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
        return cultos;
    },
    async getDomingosNoite(year: number) {
        const res = await fetch(`/api/cultos?ano=${year}&servicesId=${JSON.stringify([Constantes.CULTO_DOMINGO_NOITE])}`, {
            headers: { 'Cache-Control': 'no-cache' },
            method: 'GET'
        });
        let cultos = await res.json() as cultos;
        cultos.now = cultos.now.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
        cultos.last = cultos.last.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
        return cultos;
    }
};
