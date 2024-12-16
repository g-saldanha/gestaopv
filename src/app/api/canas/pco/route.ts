import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { Form } from '../../../../../types/form';
import { canasWebhookUrl } from '@/metrics/service/paths';

const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ZWI0MDk3NjdmMWIxMWFiZTI3NjM4ZjRiNjNmM2I2ZmViYjY1OGI2NGNmYjg1MmRlYmQ2ZTk0MDVhNWQ3MWU4OTozYTFhYjBlNzA1ZDE4OThkYTM5ZDgzNDBkZjg4M2IzZWJjMjUwYjg3M2Q5ZjMxYWMwZWFhYmM2ZjAyMTUwOTg4'
    },
    genderHeaders: { 'Content-Type': 'application/json', 'X-API-KEY': '9b27370b25d7b392b5a1d40eb36f05f2' }
};

export async function POST(request: NextRequest) {
    try {
        const toPCO = await request.json() as Form.PCO;
        try {
            const personGender: any = await axios.post('https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch', {
                'personalNames': [
                    {
                        'firstName': toPCO.person.data.attributes.first_name,
                        'lastName': toPCO.person.data.attributes.last_name,
                        'countryIso2': 'BR'
                    }
                ]
            }, { headers: { 'Content-Type': 'application/json', 'X-API-KEY': 'c5a19e29afdeaf11d1581a9e5a203409' } });
            toPCO.person.data.attributes.gender = personGender.likelyGender === 'male' ? 'Male' : 'Female';
        } catch (e) {
            console.error(e);
        }

        const personResponse = await axios.post(`https://api.planningcenteronline.com/people/v2/people`, toPCO.person, { headers: config.headers });
        try {
            await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personResponse.data.data.id}/addresses`, toPCO.address, { headers: config.headers });
        } catch (e) {
            console.error(e);
        }

        try {
            await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personResponse.data.data.id}/phone_numbers`, toPCO.whatsapp, { headers: config.headers });
        } catch (e) {
            console.error(e);
        }

        try {
            if (toPCO.email) {
                await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personResponse.data.data.id}/emails`, toPCO.email, { headers: config.headers });
            }
        } catch (e) {
            console.error(e);
        }

        try {
            await axios.post(canasWebhookUrl, {
                nome: toPCO.person.data.attributes.first_name,
                sobrenome: toPCO.person.data.attributes.last_name,
                email: toPCO.email.data.attributes.address,
                whatsapp: toPCO.whatsapp.data.attributes.number,
                sexo: toPCO.person.data.attributes.gender,
                bairro: toPCO.address.data.attributes.street_line_1
            });
        } catch (e) {

        }

        return NextResponse.json(true, {
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
