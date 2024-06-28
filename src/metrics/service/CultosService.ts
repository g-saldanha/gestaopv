export const CultosService = {
    async getDomingos(year: number) {
        const res = await fetch(`/api/cultos?ano=${year}`, {
            headers: { 'Cache-Control': 'no-cache' },
            method: 'GET'
        });
        let cultos = await res.json();
        return cultos.map((culto: Metrics.Culto) => ({ ...culto, data: new Date(culto.data_hora) })) as Metrics.Culto[];
    }
};
