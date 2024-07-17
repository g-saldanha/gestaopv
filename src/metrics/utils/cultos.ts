import { formatDatetoDayMonth } from '@/metrics/utils/date';

export const getTotals = (cultos: Metrics.Cultos): Metrics.CultosTotais => {
    const now = {
        total: parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.total, 0))),
        youtube: parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.youtube, 0)), 10),
        kids: parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.kids, 0)), 10),
        visitantes: parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.visitantes, 0)), 10),
        voluntarios: parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.voluntarios, 0)), 10),
        salvacoes: parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.salvacoes, 0)), 10),
        cultos: cultos.now.length
    };
    const last = {
        total: parseInt(String(cultos.last.reduce((accumulator, current) => accumulator + current.total, 0))),
        youtube: parseInt(String(cultos.last.reduce((accumulator, current) => accumulator + current.youtube, 0)), 10),
        kids: parseInt(String(cultos.last.reduce((accumulator, current) => accumulator + current.kids, 0)), 10),
        visitantes: parseInt(String(cultos.last.reduce((accumulator, current) => accumulator + current.visitantes, 0)), 10),
        voluntarios: parseInt(String(cultos.last.reduce((accumulator, current) => accumulator + current.voluntarios, 0)), 10),
        salvacoes: parseInt(String(cultos.last.reduce((accumulator, current) => accumulator + current.salvacoes, 0)), 10),
        cultos: cultos.last.length
    };
    const veryLast = {
        total: parseInt(String(cultos.veryLast.reduce((accumulator, current) => accumulator + current.total, 0))),
        youtube: parseInt(String(cultos.veryLast.reduce((accumulator, current) => accumulator + current.youtube, 0)), 10),
        kids: parseInt(String(cultos.veryLast.reduce((accumulator, current) => accumulator + current.kids, 0)), 10),
        visitantes: parseInt(String(cultos.veryLast.reduce((accumulator, current) => accumulator + current.visitantes, 0)), 10),
        voluntarios: parseInt(String(cultos.veryLast.reduce((accumulator, current) => accumulator + current.voluntarios, 0)), 10),
        salvacoes: parseInt(String(cultos.veryLast.reduce((accumulator, current) => accumulator + current.salvacoes, 0)), 10),
        cultos: cultos.veryLast.length
    };

    return { now, last, veryLast };
};

export const transformCultosData = (cultos: Metrics.Cultos) => {
    let fill = Array(cultos.last.length - cultos.veryLast.length).fill(null);
    return {
        labels: cultos.now.map(culto => formatDatetoDayMonth(culto.data)),
        now: cultos.last.map((culto => culto.total)),
        veryLast: fill.concat(cultos.veryLast.map((culto => culto.total))),
        last: cultos.now.map((culto => culto.total))
    };
};
