import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        let ano = url.searchParams.get('ano');
        let servicos = url.searchParams.get('servicesId');
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

        return NextResponse.json({ last, now }, {
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



