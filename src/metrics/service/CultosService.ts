interface cultos {
    last: Metrics.Culto[];
    now: Metrics.Culto[];
}

const sortByDate = (a: any, b: any) => a.data - b.data;
export const CultosService = {
    async getDomingos(year: number) {
        const res = await fetch(`/api/cultos?ano=${year}`, {
            headers: { 'Cache-Control': 'no-cache' },
            method: 'GET'
        });
        let cultos = await res.json() as cultos;
        cultos.now = cultos.now.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
        cultos.last = cultos.last.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
        return cultos;
    }
};
