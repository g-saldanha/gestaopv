import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
    try {
        const url = new URL(request.url);
        let phone = url.searchParams.get('phone');

        let axiosResponse = await axios.get(`https://api.planningcenteronline.com/people/v2/people?where[search_phone_number_e164]=${phone}&include=households`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ZWI0MDk3NjdmMWIxMWFiZTI3NjM4ZjRiNjNmM2I2ZmViYjY1OGI2NGNmYjg1MmRlYmQ2ZTk0MDVhNWQ3MWU4OTozYTFhYjBlNzA1ZDE4OThkYTM5ZDgzNDBkZjg4M2IzZWJjMjUwYjg3M2Q5ZjMxYWMwZWFhYmM2ZjAyMTUwOTg4'
            }
        });
        if (axiosResponse.data.data.length > 0) {
            return NextResponse.json(axiosResponse.data, {
                status: 200
            });
        }
        return new NextResponse(undefined, {
            status: 204
        });
    } catch (error) {
        console.error(error);
        return NextResponse.json(
            { error },
            {
                status: 500
            }
        );
    }
}
