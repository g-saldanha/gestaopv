import { Campus } from '@/metrics/components/form/Campus';

declare namespace Form {
    interface Cadastro {
        firstName: string | null;
        lastName: string | null;
        birthDate: Date | null;
        email?: string | null;
        anniversary?: Date | null;
        children?: any[] | null;
        campus: Campus;
        job?: string | null;
        cep?: string | null;
        bairro?: string | null;
        married?: boolean | null;
        whatsapp: string | undefined;
        address?: google.maps.places.PlaceResult;
        membership?: string;
        volunteer: boolean | null;
        maritalStatus?: string;
    }

    interface CadastroKids {
        firstName: string | null;
        lastName: string | null;
        birthDate?: Date | null;
        email?: string | null;
        children: any[];
        cep?: string | null;
        bairro?: string | null;
        whatsapp: string | undefined;
        address?: google.maps.places.PlaceResult;
    }

    interface CadastroConnect {
        firstName: string | null;
        lastName: string | null;
        email?: string | null;
        whatsapp: string | undefined;
        birthDate?: Date | null;
        married?: boolean;
        gender: string;
        cep?: string | null;
        bairro?: string | null;
        address?: google.maps.places.PlaceResult;
        question_one?: boolean;
        question_two?: boolean;
        question_three?: boolean;
    }

    interface Person {
        data: {
            type: string;
            attributes: {
                first_name: string;
                last_name: string;
                birthdate?: string;
                child?: boolean;
                gender?: string;
                membership?: string;
                anniversary?: string;
                primary_campus_id?: string;
            };
        };
    }

    interface PCO {
        person: Person;
        whatsapp: any;
        job?: any;
        address: any;
        email?: any;
        children?: Person[];
    }
}
