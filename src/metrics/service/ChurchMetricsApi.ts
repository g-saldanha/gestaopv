import { apiMetricsUrl } from '@/metrics/service/paths';
import { Constantes } from '@/metrics/utils/Constantes';

export const ChurchMetricsApi = {
    async getRecords() {
        const res = await fetch(`${apiMetricsUrl}/records.json?campus_id${Constantes.CAMPUS_SEDE}`, {
            headers: {
                'Cache-Control': 'no-cache',
                'X-Auth-User': 'gabrielsdasilva@hotmail.com',
                'X-Auth-Key': 'bf1fd4617a01c7d98140880a60683215'
            },
            method: 'GET'
        });

        return (await res.json()) as Metrics.Record[];
    },
    async getRecordsDomingo() {
        const res = await fetch(`${apiMetricsUrl}/records.json?campus_id${Constantes.CAMPUS_SEDE}&category_id=${Constantes.CATEGORIA_TOTAL}&per_page=100`, {
            headers: {
                'Cache-Control': 'no-cache',
                'X-Auth-User': 'gabrielsdasilva@hotmail.com',
                'X-Auth-Key': 'bf1fd4617a01c7d98140880a60683215'
            },
            method: 'GET'
        });

        return (await res.json()) as Metrics.Record[];
    },
    async getRecordsDomingoNoite() {
        const res = await fetch(`${apiMetricsUrl}/records.json?campus_id${Constantes.CAMPUS_SEDE}`, {
            headers: {
                'Cache-Control': 'no-cache',
                'X-Auth-User': 'gabrielsdasilva@hotmail.com',
                'X-Auth-Key': 'bf1fd4617a01c7d98140880a60683215'
            },
            method: 'GET'
        });

        return (await res.json()) as Metrics.Record[];
    },
    async getRecordsDomingoManha() {
        const res = await fetch(`${apiMetricsUrl}/records.json?campus_id${Constantes.CAMPUS_SEDE}`, {
            headers: {
                'Cache-Control': 'no-cache',
                'X-Auth-User': 'gabrielsdasilva@hotmail.com',
                'X-Auth-Key': 'bf1fd4617a01c7d98140880a60683215'
            },
            method: 'GET'
        });

        return (await res.json()) as Metrics.Record[];
    },
    async getRecordsQuarta() {
        const res = await fetch(`${apiMetricsUrl}/records.json?campus_id${Constantes.CAMPUS_SEDE}`, {
            headers: {
                'Cache-Control': 'no-cache',
                'X-Auth-User': 'gabrielsdasilva@hotmail.com',
                'X-Auth-Key': 'bf1fd4617a01c7d98140880a60683215'
            },
            method: 'GET'
        });

        return (await res.json()) as Metrics.Record[];
    },
    async getRecordsSoParaElas() {
        const res = await fetch(`${apiMetricsUrl}/records.json?campus_id${Constantes.CAMPUS_SEDE}`, {
            headers: {
                'Cache-Control': 'no-cache',
                'X-Auth-User': 'gabrielsdasilva@hotmail.com',
                'X-Auth-Key': 'bf1fd4617a01c7d98140880a60683215'
            },
            method: 'GET'
        });

        return (await res.json()) as Metrics.Record[];
    },
    async getRecordsPulse() {
        const res = await fetch(`${apiMetricsUrl}/records.json?campus_id${Constantes.CAMPUS_SEDE}`, {
            headers: {
                'Cache-Control': 'no-cache',
                'X-Auth-User': 'gabrielsdasilva@hotmail.com',
                'X-Auth-Key': 'bf1fd4617a01c7d98140880a60683215'
            },
            method: 'GET'
        });

        return (await res.json()) as Metrics.Record[];
    }
};
