import { sql } from '@vercel/postgres';
import { Constantes } from '@/metrics/utils/Constantes';
import prisma from '../../../lib/prisma';

export const CultosRepository = {
    async getDomingos() {
        return await prisma.culto.findMany({ where: { serviceid: { in: [Constantes.CULTO_DOMINGO_MANHA, Constantes.CULTO_DOMINGO_NOITE] } } });
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

