import { Constantes } from '@/metrics/utils/Constantes';


const sortByDate = (a: any, b: any) => a.data - b.data;

async function fetchCultos(year: number, cultosArray: (number)[]) {
    const res = await fetch(`/api/cultos?ano=${year}&servicesId=${JSON.stringify(cultosArray)}`, {
        headers: { 'Cache-Control': 'no-cache' },
        method: 'GET'
    });
    let cultos = await res.json() as Metrics.Cultos;
    cultos.now = cultos.now.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
    cultos.last = cultos.last.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
    console.log(cultos.veryLast);
    cultos.veryLast = cultos.veryLast.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
    return cultos;
}

export const CultosService = {
    async getDomingos(year: number) {
        return await fetchCultos(year, [Constantes.CULTO_DOMINGO_MANHA, Constantes.CULTO_DOMINGO_NOITE]);
    },
    async getQuartas(year: number) {
        return await fetchCultos(year, [Constantes.CULTO_QUARTA]);
    },
    async getDomingosManha(year: number) {
        return await fetchCultos(year, [Constantes.CULTO_DOMINGO_MANHA]);
    },
    async getDomingosNoite(year: number) {
        return await fetchCultos(year, [Constantes.CULTO_DOMINGO_NOITE]);
    }
};
