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
}
