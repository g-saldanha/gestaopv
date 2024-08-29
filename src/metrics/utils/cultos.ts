import { findMinMaxDates, formatDatetoDayMonth } from '@/metrics/utils/date';

// Função para formatar a data sem o horário
function formatDateWithoutTime(date: Date) {
    return date.toISOString().split('T')[0];
}

export function arrumaDadosGerais(cultos: Metrics.Cultos): Metrics.Cultos {
    return {
        now: combineObjectsWithSameDate(cultos.now),
        last: combineObjectsWithSameDate(cultos.last),
        veryLast: combineObjectsWithSameDate(cultos.veryLast)
    };
}

// Função para combinar objetos com a mesma data
export function combineObjectsWithSameDate(arr: Metrics.Culto[]): Metrics.Culto[] {
    const groupedObjects = {};

    arr.forEach(obj => {
        //@ts-ignore
        const dateKey = formatDateWithoutTime(obj.data);
        // @ts-ignore
        if (!groupedObjects[dateKey]) {
            // @ts-ignore
            groupedObjects[dateKey] = [];
        }
        // @ts-ignore
        groupedObjects[dateKey].push(obj);
    });

// @ts-ignore
    return Object.values(groupedObjects).map(group => {
        // @ts-ignore
        return mergeAndSumNumericAttributes(group[0], group[1]);
    });
}

// Função para somar atributos numéricos de dois objetos
function mergeAndSumNumericAttributes(obj1: any, obj2: any) {
    const result = {};
    let nao = ['week_reference', 'serviceid'];
    // Iterar sobre as chaves do primeiro objeto
    for (const key in obj1) {
        try {
            if (obj1.hasOwnProperty(key)) {
                if (typeof obj1[key] === 'number' && !nao.includes(key)) {
                    // @ts-ignore
                    result[key] = obj1[key] + (obj2[key] ? obj2[key] : 0);
                } else {
                    // @ts-ignore
                    result[key] = obj1[key];
                }
            }
        } catch (e) {
            // console.error(e);
        }

    }

    // Iterar sobre as chaves do segundo objeto que não estão no primeiro objeto
    for (const key in obj2) {
        if (obj2.hasOwnProperty(key) && !result.hasOwnProperty(key)) {
            if (typeof obj2[key] === 'number') {
                // @ts-ignore
                result[key] = obj2[key];
            } else {
                // @ts-ignore
                result[key] = obj2[key];
            }
        }
    }

    return result;
}

export const getTotals = (cultos: Metrics.Cultos): Metrics.CultosTotais => {
    const { minDate, maxDate } = findMinMaxDates(cultos.now);
    const now = {
        total: parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.total, 0))),
        youtube: parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.youtube, 0)), 10),
        kids: parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.kids, 0)), 10),
        visitantes: parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.visitantes, 0)), 10),
        voluntarios: parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.voluntarios, 0)), 10),
        salvacoes: parseInt(String(cultos.now.reduce((accumulator, current) => accumulator + current.salvacoes, 0)), 10),
        cultos: cultos.now.length
    };


    // @ts-ignore
    const last = {
        // @ts-ignore
        total: parseInt(String(cultos.last.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).reduce((accumulator, current) => accumulator + current.total, 0))),
        // @ts-ignore
        youtube: parseInt(String(cultos.last.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).reduce((accumulator, current) => accumulator + current.youtube, 0)), 10),
        // @ts-ignore
        kids: parseInt(String(cultos.last.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).reduce((accumulator, current) => accumulator + current.kids, 0)), 10),
        // @ts-ignore
        visitantes: parseInt(String(cultos.last.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).reduce((accumulator, current) => accumulator + current.visitantes, 0)), 10),
        // @ts-ignore
        voluntarios: parseInt(String(cultos.last.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).reduce((accumulator, current) => accumulator + current.voluntarios, 0)), 10),
        // @ts-ignore
        salvacoes: parseInt(String(cultos.last.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).reduce((accumulator, current) => accumulator + current.salvacoes, 0)), 10),
        // @ts-ignore
        cultos: cultos.last.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).length
    };
    const veryLast = {
        // @ts-ignore
        total: parseInt(String(cultos.veryLast.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).reduce((accumulator, current) => accumulator + current.total, 0))),
        // @ts-ignore
        youtube: parseInt(String(cultos.veryLast.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).reduce((accumulator, current) => accumulator + current.youtube, 0)), 10),
        // @ts-ignore
        kids: parseInt(String(cultos.veryLast.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).reduce((accumulator, current) => accumulator + current.kids, 0)), 10),
        // @ts-ignore
        visitantes: parseInt(String(cultos.veryLast.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).reduce((accumulator, current) => accumulator + current.visitantes, 0)), 10),
        // @ts-ignore
        voluntarios: parseInt(String(cultos.veryLast.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).reduce((accumulator, current) => accumulator + current.voluntarios, 0)), 10),
        // @ts-ignore
        salvacoes: parseInt(String(cultos.veryLast.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).reduce((accumulator, current) => accumulator + current.salvacoes, 0)), 10),
        // @ts-ignore
        cultos: cultos.veryLast.filter(culto => culto.data.getMonth() >= minDate.getMonth() && culto.data.getMonth() <= maxDate.getMonth()).length
    };

    return { now, last, veryLast };
};


export const getMonthTotals = (cultos: Metrics.Cultos, month: number): Metrics.CultosTotais => {
    const { minDate, maxDate } = findMinMaxDates(cultos.now);
    const now = {
        total: parseInt(String(cultos.now.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.total, 0))),
        youtube: parseInt(String(cultos.now.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.youtube, 0)), 10),
        kids: parseInt(String(cultos.now.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.kids, 0)), 10),
        visitantes: parseInt(String(cultos.now.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.visitantes, 0)), 10),
        voluntarios: parseInt(String(cultos.now.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.voluntarios, 0)), 10),
        salvacoes: parseInt(String(cultos.now.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.salvacoes, 0)), 10),
        cultos: cultos.now.filter(culto => culto.data?.getMonth() === month).length
    };
    const last = {
        total: parseInt(String(cultos.last.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.total, 0))),
        youtube: parseInt(String(cultos.last.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.youtube, 0)), 10),
        kids: parseInt(String(cultos.last.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.kids, 0)), 10),
        visitantes: parseInt(String(cultos.last.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.visitantes, 0)), 10),
        voluntarios: parseInt(String(cultos.last.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.voluntarios, 0)), 10),
        salvacoes: parseInt(String(cultos.last.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.salvacoes, 0)), 10),
        // @ts-ignore
        cultos: cultos.last.filter(culto => culto.data?.getMonth() === month).length
    };
    const veryLast = {
        total: parseInt(String(cultos.veryLast.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.total, 0))),
        youtube: parseInt(String(cultos.veryLast.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.youtube, 0)), 10),
        kids: parseInt(String(cultos.veryLast.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.kids, 0)), 10),
        visitantes: parseInt(String(cultos.veryLast.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.visitantes, 0)), 10),
        voluntarios: parseInt(String(cultos.veryLast.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.voluntarios, 0)), 10),
        salvacoes: parseInt(String(cultos.veryLast.filter(culto => culto.data?.getMonth() === month).reduce((accumulator, current) => accumulator + current.salvacoes, 0)), 10),
        cultos: cultos.veryLast.filter(culto => culto.data?.getMonth() === month).length
    };


    return { now, last, veryLast };
};

export const transformCultosData = (cultos: Metrics.Cultos) => {
    let fill = Array(cultos.last.length - cultos.veryLast.length).fill(null);
    return {
        labels: cultos.now.map(culto => formatDatetoDayMonth(culto.data)),
        now: cultos.now.map((culto => culto.total)),
        veryLast: fill.concat(cultos.veryLast.map((culto => culto.total))),
        last: cultos.last.map((culto => culto.total))
    };
};

export const transformMonthCultosData = (cultos: Metrics.Cultos, month: number) => {
    let fill = Array(cultos.last.length - cultos.veryLast.length).fill(null);
    return {
        labels: cultos.now.filter(culto => culto.data?.getMonth() === month).map(culto => formatDatetoDayMonth(culto.data)),
        last: cultos.last.filter(culto => culto.data?.getMonth() === month).map((culto => culto.total)),
        now: cultos.now.filter(culto => culto.data?.getMonth() === month).map((culto => culto.total)),
        veryLast: fill.concat(cultos.veryLast.filter(culto => culto.data?.getMonth() === month).map((culto => culto.total)))
    };
};

export function formatBigNumber(num: number) {
    if (num >= 1000) {
        const units = ['', 'k', 'M', 'B', 'T']; // Pode adicionar mais unidades se necessário
        const order = Math.floor(Math.log10(num) / 3); // Determina a ordem da unidade
        const unitName = units[order];
        const numUnit = (num / Math.pow(1000, order)).toFixed(1); // Formata o número com uma casa decimal
        // Remove ".0" se o número for um múltiplo exato de mil, milhão, etc.
        return numUnit.endsWith('.0') ? numUnit.slice(0, -2) + unitName : numUnit + unitName;
    }
    return num.toString();
}
