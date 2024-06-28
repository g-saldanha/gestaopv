import { Constantes } from '@/metrics/utils/Constantes';
import { PrismaClient } from '@prisma/client';
import { NextRequest, NextResponse } from 'next/server';

// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
    try {
        // Get all admins using Prisma
        const url = new URL(request.url);
        let ano = url.searchParams.get('ano');
        const cultos = await prisma.culto.findMany({
            where: {
                serviceid: { in: [Constantes.CULTO_DOMINGO_MANHA, Constantes.CULTO_DOMINGO_NOITE] },
                data_hora: {
                    gte: new Date(`${Number(ano) - 1}-01-01`), // Start of date range
                    lte: new Date(`${Number(ano)}-12-31`) // End of date range
                }
            }
        });

        return NextResponse.json(cultos, {
            status: 200
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error: 'Failed to get admins' },
            {
                status: 500
            }
        );
    }
}



