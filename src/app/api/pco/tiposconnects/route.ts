import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(request: NextRequest) {
    try {
        let axiosResponse = await axios.get(`https://api.planningcenteronline.com/groups/v2/group_types`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ZWI0MDk3NjdmMWIxMWFiZTI3NjM4ZjRiNjNmM2I2ZmViYjY1OGI2NGNmYjg1MmRlYmQ2ZTk0MDVhNWQ3MWU4OTozYTFhYjBlNzA1ZDE4OThkYTM5ZDgzNDBkZjg4M2IzZWJjMjUwYjg3M2Q5ZjMxYWMwZWFhYmM2ZjAyMTUwOTg4'
            }
        });

        return NextResponse.json(axiosResponse.data.data.filter((groupType: any) => groupType.attributes.name !== 'Unique Groups').map((groupType: any) => {
            if (groupType.attributes.name == 'Líderes') {
                return 'Líderes (PV Ingleses)';
            }
            return groupType.attributes.name;
        }), {
            status: 200
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
