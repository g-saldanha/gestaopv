import { CadastroService } from '@/metrics/service/CadastroService';
import validator from 'validator';
import { Form } from '../../../../types/form';


export const initCadastro: ValidateCadastro = {
    isValid: false,
    errors: {
        firstName: false,
        lastName: false,
        birthDate: false,
        whatsapp: false,
        email: false,
        membership: false,
        address: false,
        married: false,
        campus: false,
        job: false
    },
    form: {
        firstName: '',
        lastName: '',
        birthDate: null,
        email: '',
        anniversary: null,
        children: null,
        // @ts-ignore
        campus: null,
        job: '',
        cep: '',
        bairro: '',
        married: false,
        whatsapp: '',
        // @ts-ignore
        address: null,
        membership: '',
        volunteer: false,
        maritalStatus: ''
    }
};

interface ErrorCadastro {
    firstName: boolean;
    lastName: boolean;
    birthDate: boolean;
    whatsapp: boolean;
    email: boolean;
    membership: boolean;
    address: boolean;
    married: boolean;
    campus: boolean;
    job: boolean;
}

export interface ValidateCadastro {
    isValid?: boolean;
    form?: Form.Cadastro;
    errors?: ErrorCadastro;
}

export const validateCadastro = async (cadastro: ValidateCadastro): Promise<ValidateCadastro> => {
    cadastro.isValid = true;
    if (!cadastro?.form?.firstName && !cadastro.form?.firstName?.length) {
        // @ts-ignore
        cadastro.errors.firstName = true;
        cadastro.isValid = false;
    }
// @ts-ignore
    if (!cadastro?.form?.lastName && !cadastro?.form?.lastName?.length) {
        // @ts-ignore
        cadastro.errors.lastName = true;
        cadastro.isValid = false;
    }

    if (!cadastro?.form?.birthDate) {
        // @ts-ignore
        cadastro.errors.birthDate = true;
        cadastro.isValid = false;
    }
// @ts-ignore
    let isWpChecked = await CadastroService.checkWhatsapp(cadastro?.form?.whatsapp);
    if (!cadastro?.form?.whatsapp || !isWpChecked) {
        // @ts-ignore
        cadastro.errors.whatsapp = true;
        cadastro.isValid = false;
    }
// @ts-ignore
    if (cadastro?.form?.email !== '' && !validator.isEmail(cadastro?.form?.email)) {
        // @ts-ignore
        cadastro.errors.email = true;
        cadastro.isValid = false;
    }

    // @ts-ignore
    if (!cadastro?.form?.address) {
        // @ts-ignore
        cadastro.errors.address = true;
        cadastro.isValid = false;
    }

    if (cadastro?.form?.volunteer !== null) {
        // @ts-ignore
        cadastro.form.membership = cadastro.form.volunteer ? 'Voluntário(a)' : 'Membro(a)';
    } else {
        // @ts-ignore
        cadastro.errors.membership = true;
        cadastro.isValid = false;
    }

    if (cadastro?.form?.married !== null) {
        if (cadastro?.form?.married === true) {
            // @ts-ignore
            cadastro.form.maritalStatus = 'Married';
        } else {
            // @ts-ignore
            cadastro.form.maritalStatus = 'Solteiro(a)';
        }
    } else {
        // @ts-ignore
        cadastro.errors.married = true;
        cadastro.isValid = false;
    }

    if (!cadastro?.form?.campus) {
        // @ts-ignore
        cadastro.errors.campus = true;
        cadastro.isValid = false;
    }


    // @ts-ignore
    if (!cadastro?.form?.job && cadastro?.form?.job === '') {
        // @ts-ignore
        cadastro.errors.job = true;
        cadastro.isValid = false;
    }

    return cadastro;
};
