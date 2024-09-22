import { NextRequest, NextResponse } from 'next/server';
import { Form } from '../../../../types/form';
import axios from 'axios';

let config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ZWI0MDk3NjdmMWIxMWFiZTI3NjM4ZjRiNjNmM2I2ZmViYjY1OGI2NGNmYjg1MmRlYmQ2ZTk0MDVhNWQ3MWU4OTozYTFhYjBlNzA1ZDE4OThkYTM5ZDgzNDBkZjg4M2IzZWJjMjUwYjg3M2Q5ZjMxYWMwZWFhYmM2ZjAyMTUwOTg4'
    },
    genderHeaders: { 'Content-Type': 'application/json', 'X-API-KEY': '9b27370b25d7b392b5a1d40eb36f05f2' }
};


export async function POST(request: NextRequest) {
    try {
        let toPCO = await request.json() as Form.PCO;
        const personGender: any = await axios.post('https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch', {
            'personalNames': [
                {
                    'firstName': toPCO.person.data.attributes.first_name,
                    'lastName': toPCO.person.data.attributes.last_name,
                    'countryIso2': 'BR'
                }
            ]
        }, { headers: config.genderHeaders });
        toPCO.person.data.attributes.gender = personGender.likelyGender === 'male' ? 'Male' : 'Female';
        const personResponse = await axios.post(`https://api.planningcenteronline.com/people/v2/people`, toPCO.person, { headers: config.headers });
        await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personResponse.data.data.id}/addresses`, toPCO.address, { headers: config.headers });
        await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personResponse.data.data.id}/phone_numbers`, toPCO.whatsapp, { headers: config.headers });
        if (toPCO.email) {
            await axios.post(`https://api.planningcenteronline.com/people/v2/people`, toPCO.email, { headers: config.headers });
        }

        if (toPCO.job) {
            await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personResponse.data.data.id}/field_data`, toPCO.job, { headers: config.headers });
        }

        if (toPCO.children) {
            const household = {
                'data': {
                    'attributes': { 'name': `Os Membros ${toPCO.person.data.attributes.last_name}` },
                    'relationships': {
                        'people': {
                            'data': [{
                                'type': 'Person',
                                'id': `${personResponse.data.id}`
                            }]
                        },
                        'primary_contact': {
                            'data': {
                                'type': 'Person',
                                'id': `${personResponse.data.id}`
                            }
                        }
                    }
                }
            };
            for (const child of toPCO.children) {
                const personGender: any = await axios.post('https://v2.namsor.com/NamSorAPIv2/api2/json/genderGeoBatch', {
                    'personalNames': [
                        {
                            'firstName': child.data.attributes.first_name,
                            'lastName': child.data.attributes.last_name,
                            'countryIso2': 'BR'
                        }
                    ]
                }, { headers: config.genderHeaders });
                child.data.attributes.gender = personGender.likelyGender === 'male' ? 'Male' : 'Female';
                let childResponse = await axios.post(`https://api.planningcenteronline.com/people/v2/people`, child, { headers: config.headers });
                household.data.relationships.people.data.push({
                    'type': 'Person',
                    'id': `${childResponse.data.data.id}`
                });
            }
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
