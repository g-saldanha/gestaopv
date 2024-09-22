import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const prisma = new PrismaClient();
const sortByDate = (a: any, b: any) => a.data - b.data;

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        let ano = url.searchParams.get('ano');
        let servicos = url.searchParams.get('servicesId');
        let veryLast = await prisma.culto.findMany({
            where: {
                // @ts-ignore
                serviceid: { in: JSON.parse(servicos) },
                data_hora: {
                    gte: new Date(`${Number(ano) - 2}-01-01`), // Start of date range
                    lte: new Date(`${Number(ano) - 2}-12-31`) // End of date range
                }
            }
        });
        let last = await prisma.culto.findMany({
            where: {
                // @ts-ignore
                serviceid: { in: JSON.parse(servicos) },
                data_hora: {
                    gte: new Date(`${Number(ano) - 1}-01-01`), // Start of date range
                    lte: new Date(`${Number(ano) - 1}-12-31`) // End of date range
                }
            }
        });
        let now = await prisma.culto.findMany({
            where: {
                // @ts-ignore
                serviceid: { in: JSON.parse(servicos) },
                data_hora: {
                    gte: new Date(`${Number(ano)}-01-01`), // Start of date range
                    lte: new Date(`${Number(ano)}-12-31`) // End of date range
                }
            }
        });
        // @ts-ignore
        now = now.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
        // @ts-ignore
        last = last.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
        // @ts-ignore
        veryLast = veryLast.map((culto) => ({ ...culto, data: new Date(culto.data_hora) })).sort(sortByDate);
        return NextResponse.json({ last, now, veryLast }, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get admins' },
            {
                status: 500
            }
        );
    }
}


const axios = require('axios');
let data = JSON.stringify({
    'data': {
        'type': 'Person',
        'attributes': {
            'first_name': 'Hillary',
            'last_name': 'Desconhecido',
            'membership': 'Visitante',
            'gender': 'Male',
            'primary_campus_id': '89632'
        }
    }
});




