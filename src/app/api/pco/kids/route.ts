import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import { Form } from '../../../../../types/form';

let config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Basic ZWI0MDk3NjdmMWIxMWFiZTI3NjM4ZjRiNjNmM2I2ZmViYjY1OGI2NGNmYjg1MmRlYmQ2ZTk0MDVhNWQ3MWU4OTozYTFhYjBlNzA1ZDE4OThkYTM5ZDgzNDBkZjg4M2IzZWJjMjUwYjg3M2Q5ZjMxYWMwZWFhYmM2ZjAyMTUwOTg4'
    },
    genderHeaders: { 'Content-Type': 'application/json', 'X-API-KEY': 'c5a19e29afdeaf11d1581a9e5a203409' }
};

export async function POST(request: NextRequest) {
    try {
        let personId = null;
        let toPCO = await request.json() as Form.PCO;
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

        try {
            let axiosResponse = await axios.get(`https://api.planningcenteronline.com/people/v2/people?where[search_phone_number_e164]=${toPCO.phone}`, { headers: config.headers });
            if (axiosResponse.data.data.length > 0) {
                personId = axiosResponse.data.data[0].id;
                await axios.patch(`https://api.planningcenteronline.com/people/v2/people/${personId}`, toPCO.person, { headers: config.headers });
            } else {
                const personResponse = await axios.post(`https://api.planningcenteronline.com/people/v2/people`, toPCO.person, { headers: config.headers });
                personId = personResponse.data.data.id;
            }
        } catch (e) {
            console.error(e);
        }

        try {
            await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personId}/addresses`, toPCO.address, { headers: config.headers });
        } catch (e) {
            console.error(e);
        }

        try {
            await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personId}/phone_numbers`, toPCO.whatsapp, { headers: config.headers });
        } catch (e) {
            console.error(e);
        }
        try {
            if (toPCO.email) {
                await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personId}/emails`, toPCO.email, { headers: config.headers });
            }
        } catch (e) {
            console.error(e);
        }

        try {
            if (toPCO.children) {
                const household = {
                    'data': {
                        'attributes': { 'name': `Os Membros ${toPCO.person.data.attributes.last_name}` },
                        'relationships': {
                            'people': {
                                'data': [{
                                    'type': 'Person',
                                    'id': `${personId}`
                                }]
                            },
                            'primary_contact': {
                                'data': {
                                    'type': 'Person',
                                    'id': `${personId}`
                                }
                            }
                        }
                    }
                };
                for (const child of toPCO.children) {
                    try {
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
                    } catch (e) {
                        console.error(e);
                    }
                }
                await axios.post(`https://api.planningcenteronline.com/people/v2/households`, household, { headers: config.headers });
            }
        } catch (e) {
            console.error(e);
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
