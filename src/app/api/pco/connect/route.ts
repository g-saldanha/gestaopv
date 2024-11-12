import { NextRequest, NextResponse } from 'next/server';
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
        let personResponse = null;
        let toPCO = await request.json() as any;
        if (toPCO.personId) {
            await axios.patch(`https://api.planningcenteronline.com/people/v2/people`, toPCO.person, { headers: config.headers });
        } else {
            personResponse = await axios.post(`https://api.planningcenteronline.com/people/v2/people`, toPCO.person, { headers: config.headers });
        }

        if (toPCO.personId) {
            try {
                await axios.post(`https://api.planningcenteronline.com/people/v2/people/${toPCO.personId}/addresses`, toPCO.address, { headers: config.headers });
            } catch (e) {
                console.error(e);
            }
        } else {
            try {
                // @ts-ignore
                await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personResponse.data.data.id}/addresses`, toPCO.address, { headers: config.headers });
            } catch (e) {
                console.error(e);
            }
        }

        if (!toPCO.personId) {
            try {
                // @ts-ignore
                await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personResponse.data.data.id}/phone_numbers`, toPCO.whatsapp, { headers: config.headers });
            } catch (e) {
                console.error(e);
            }
        }

        if (!toPCO.personId) {
            try {
                if (toPCO.email) {
                    // @ts-ignore
                    await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personResponse.data.data.id}/emails`, toPCO.email, { headers: config.headers });
                }
            } catch (e) {
                console.error(e);
            }
        }

        if (toPCO.volunteer) {
            const personId = toPCO.personId || personResponse?.data?.data?.id;
            const volunteering = {
                data: {
                    type: 'WorkflowCard',
                    attributes: {
                        assignee_id: '144633687',
                        person_id: personId
                    }
                }
            };
            try {
                // @ts-ignore
                await axios.post(`https://api.planningcenteronline.com/people/v2/workflows/568312/cards`, volunteering, { headers: config.headers });
            } catch (e) {
                console.error(e);
            }

        }

        if (toPCO.wasVolunteer) {
            const personId = toPCO.personId || personResponse?.data?.data?.id;
            const volunteering = {
                'data': {
                    'attributes': {
                        'field_definition_id': '740340',
                        'value': toPCO.wasVolunteer.toString()
                    }
                }
            };

            // @ts-ignore
            try {
                await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personId}/field_data`, volunteering, { headers: config.headers });
            } catch (e) {
                console.error(e);
            }
        }

        if (toPCO.connect) {
            const personId = toPCO.personId || personResponse?.data?.data?.id;
            const connect = {
                data: {
                    attributes: {
                        field_definition_id: '747255',
                        value: toPCO.connect
                    }
                }
            };

            const connectinter = {
                data: {
                    type: 'WorkflowCard',
                    attributes: {
                        assignee_id: '142841406',
                        person_id: personId
                    }
                }
            };
            // @ts-ignore
            try {
                await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personId}/field_data`, connect, { headers: config.headers });
                await axios.post(`https://api.planningcenteronline.com/people/v2/workflows/507496/cards`, connectinter, { headers: config.headers });
            } catch (e) {
                console.error(e);
            }
        }

        // try {
        //     await axios.post(`https://api.planningcenteronline.com/people/v2/people/${personId}/field_data`, connect, { headers: config.headers });
        // } catch (e) {
        //     console.error(e);
        // }


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
