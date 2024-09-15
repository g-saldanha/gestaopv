import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { getAuth } from '@/metrics/utils/pco';


export async function GET(request: NextRequest) {
    try {
        let axiosResponse = await axios.get(`https://api.planningcenteronline.com/people/v2/campuses`, getAuth());
        let rest = axiosResponse.data as PCO.CampusResponse;
        const campuses = rest.data.map(campus => ({
            value: campus.id,
            label: campus.attributes.name === 'Palavra Viva Church' ? 'Sede Capoeiras' : campus.attributes.name.replace('Palavra Viva ', ''),
            country: campus.attributes.country
        }));
        return NextResponse.json(campuses, {
            status: 200
        });
    } catch (error) {
        return NextResponse.json(
            { error: 'Failed to get admins', errorobj: error },
            {
                status: 500
            }
        );
    }
}
