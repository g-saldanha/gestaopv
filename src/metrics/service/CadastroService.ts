import { campusesResponse, getAuth } from '@/metrics/utils/pco';
import axios from 'axios';

export interface Campuses {
    value: string,
    label: string,
    country: string
}

async function getCampuses(): Promise<Campuses[]> {
    let axiosResponse = await axios.get(`https://api.planningcenteronline.com/people/v2/campuses`, getAuth());
    let rest = axiosResponse.data as PCO.CampusResponse;
    return rest.data.map(campus => ({
        value: campus.id,
        label: campus.attributes.name === 'Palavra Viva Church' ? 'Sede Capoeiras' : campus.attributes.name.replace('Palavra Viva ', ''),
        country: campus.attributes.country
    }));
}

function getCampusesMem(): Campuses[] {
    return campusesResponse.data.map(campus => ({
        value: campus.id,
        label: campus.attributes.name === 'Palavra Viva Church' ? 'Sede Capoeiras' : campus.attributes.name.replace('Palavra Viva ', ''),
        country: campus.attributes.country
    }));
}

export const CadastroService = {
    async getCampuses() {
        return await getCampuses();
    },
    getCampusesMem() {
        return getCampusesMem();
    }
};
