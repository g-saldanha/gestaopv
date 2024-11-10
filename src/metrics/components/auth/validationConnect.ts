import { CadastroService } from '@/metrics/service/CadastroService';
import validator from 'validator';
import { Form } from '../../../../types/form';

function hasEmptyField(array: Array<any>) {
    return array.some(obj => Object.values(obj).some(value => value === ''));
}

export const initCadastroConnect: ValidateCadastroConnect = {
    isValid: false,
    errors: {
        firstName: false,
        lastName: false,
        email: false,
        whatsapp: false,
        birthDate: false,
        gender: false,
        married: false,
        address: false,
        question_one: false,
        question_two: false,
        question_three: false
    },
    form: {
        firstName: '',
        lastName: '',
        birthDate: null,
        email: '',
        cep: '',
        bairro: '',
        married: false,
        whatsapp: '',
        // @ts-ignore
        address: null
    }
};

interface ErrorCadastroConnect {
    firstName: boolean;
    lastName: boolean;
    email: boolean;
    whatsapp: boolean;
    birthDate: boolean;
    gender: boolean;
    married: boolean;
    address: boolean;
    question_one: boolean;
    question_two: boolean;
    question_three: boolean;
}

export interface ValidateCadastroConnect {
    isValid?: boolean;
    form?: Form.CadastroConnect;
    errors?: ErrorCadastroConnect;
}

export const validateCadastroConnect = async (cadastro: ValidateCadastroConnect): Promise<ValidateCadastroConnect> => {
    let vCadastro = cadastro;
    vCadastro.isValid = true;
    if (!vCadastro?.form?.firstName && !vCadastro.form?.firstName?.length) {
        // @ts-ignore
        vCadastro.errors.firstName = true;
        vCadastro.isValid = false;
    }
// @ts-ignore
    if (!vCadastro?.form?.lastName && !vCadastro?.form?.lastName?.length) {
        // @ts-ignore
        vCadastro.errors.lastName = true;
        vCadastro.isValid = false;
    }

    if (!vCadastro?.form?.birthDate) {
        // @ts-ignore
        vCadastro.errors.birthDate = true;
        vCadastro.isValid = false;
    }
// @ts-ignore
    let isWpChecked = await CadastroService.checkWhatsapp(vCadastro?.form?.whatsapp);
    if (!vCadastro?.form?.whatsapp || !isWpChecked) {
        // @ts-ignore
        vCadastro.errors.whatsapp = true;
        vCadastro.isValid = false;
    }
// @ts-ignore
    if (vCadastro?.form?.email !== '' && !validator.isEmail(vCadastro?.form?.email)) {
        // @ts-ignore
        vCadastro.errors.email = true;
        vCadastro.isValid = false;
    }

    // @ts-ignore
    if (!vCadastro?.form?.address) {
        // @ts-ignore
        vCadastro.errors.address = true;
        vCadastro.isValid = false;
    }

    // @ts-ignore
    if (!vCadastro?.form?.married) {
        // @ts-ignore
        vCadastro.errors.married = true;
        vCadastro.isValid = false;
    }
    // @ts-ignore
    if (!vCadastro?.form?.gender) {
        // @ts-ignore
        vCadastro.errors.gender = true;
        vCadastro.isValid = false;
    }
    // @ts-ignore
    if (!vCadastro?.form?.question_one) {
        // Ensure errors object exists
        // @ts-ignore
        vCadastro.errors.question_one = true;
        vCadastro.isValid = false;
    }
    // @ts-ignore
    if (!vCadastro?.form?.question_two) {
        // @ts-ignore
        vCadastro.errors.question_two = true;
        vCadastro.isValid = false;
    }
    // @ts-ignore
    if (!vCadastro?.form?.question_three) {
        // @ts-ignore
        vCadastro.errors.question_three = true;
        vCadastro.isValid = false;
    }

    return vCadastro;
};
