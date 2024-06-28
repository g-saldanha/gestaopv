import { sql } from '@vercel/postgres';
import { Constantes } from '@/metrics/utils/Constantes';

export const CultosRepository = {
    async getDomingos() {
        const { rows, fields } = await sql`
          SELECT *
          FROM verceldb.pvmetrics.cultos_domingo`;
        return rows as Metrics.Culto[];
    },
    async getDomingosNoite() {
        return await sql<Metrics.Culto[]>`
        SELECT *
        FROM pvmetrics.cultos_domingo;
        WHERE serviceid =${Constantes.CULTO_DOMINGO_NOITE}`;
    },
    async getDomingosManha() {
        return await sql<Metrics.Culto[]>`
        SELECT *
        FROM pvmetrics.cultos_domingo;
        WHERE serviceid =${Constantes.CULTO_DOMINGO_MANHA}`;
    },
    async getQuartas() {
        return await sql<Metrics.Culto[]>`
        SELECT *
        FROM pvmetrics.cultos_quarta`;
    },
    async getPulse() {
        return await sql<Metrics.Culto[]>`
      SELECT *
        FROM pvmetrics.evento_pulse`;
    },
    async getSoParaElas() {
        return await sql<Metrics.Culto[]>`
        SELECT *
        FROM pvmetrics.evento_soparaelas`;
    }
};

