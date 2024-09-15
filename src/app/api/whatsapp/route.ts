import { NextRequest, NextResponse } from 'next/server';
import { evoUrl } from '@/metrics/service/paths';
import { Constantes } from '@/metrics/utils/Constantes';
import axios from 'axios';


export async function GET(request: NextRequest) {
    try {

        const url = new URL(request.url);
        let zap = url.searchParams.get('zap');
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `${evoUrl}/chat/whatsappNumbers/${Constantes.EVO_INSTANCE}`,
            headers: {
                'Content-Type': 'application/json',
                'apikey': 'fee5c7c9bfc322501f203714fe0ce7e1'
            },
            data: JSON.stringify({
                'numbers': [
                    zap
                ]
            })
        };
        // @ts-ignore
        console.log({ config, zap });
        let axiosResponse = await axios.request(config);
        return NextResponse.json(axiosResponse.data[0].exists, {
            status: 200
        });
    } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: 'Failed to get admins', errorobj: error },
            {
                status: 500
            }
        );
    }
}
