import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

let config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ZWI0MDk3NjdmMWIxMWFiZTI3NjM4ZjRiNjNmM2I2ZmViYjY1OGI2NGNmYjg1MmRlYmQ2ZTk0MDVhNWQ3MWU4OTozYTFhYjBlNzA1ZDE4OThkYTM5ZDgzNDBkZjg4M2IzZWJjMjUwYjg3M2Q5ZjMxYWMwZWFhYmM2ZjAyMTUwOTg4'
    },
    genderHeaders: { 'Content-Type': 'application/json', 'X-API-KEY': 'c5a19e29afdeaf11d1581a9e5a203409' }
};

export async function POST(request: NextRequest) {
    try {
        const households = await request.json() as any[];
        for (const household of households) {
            const axiosResponse = await axios.get(`https://api.planningcenteronline.com/people/v2/households/${household.id}?include=people`, { headers: config.headers });
            const children = axiosResponse.data.included.filter((person: any) => person.attributes.child === true);
            if (children.length > 0) {
                return NextResponse.json(children, {
                    status: 200
                });
            }
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
