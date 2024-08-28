declare namespace Metrics {
    interface Culto {
        week_reference: number;
        data_hora: string;
        data?: Date;
        serviceid: number;
        periodo?: string;
        total: number;
        youtube: number;
        kids: number;
        visitantes: number;
        voluntarios: number;
        salvacoes: number;
    }

    interface User {
        email: string;
        password: string;
        id: number;
    }

    interface Totais {
        total: number;
        youtube: number;
        kids: number;
        visitantes: number;
        voluntarios: number;
        salvacoes: number;
        cultos: number;
    }

    interface CultosTotais {
        now: Totais;
        last: Totais;
        veryLast: Totais;
    }

    interface Cultos {
        last: Metrics.Culto[];
        now: Metrics.Culto[];
        veryLast: Metrics.Culto[];
    }
}
