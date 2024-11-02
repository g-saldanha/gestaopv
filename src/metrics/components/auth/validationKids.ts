import { CadastroService } from '@/metrics/service/CadastroService';
import validator from 'validator';
import { Form } from '../../../../types/form';

function hasEmptyField(array: Array<any>) {
    return array.some(obj => Object.values(obj).some(value => value === ''));
}

export const initCadastroKids: ValidateCadastroKids = {
    isValid: false,
    errors: {
        firstName: false,
        lastName: false,
        birthDate: false,
        whatsapp: false,
        email: false,
        address: false,
        children: false
    },
    form: {
        firstName: '',
        lastName: '',
        birthDate: null,
        email: '',
        children: [],
        // @ts-ignore
        cep: '',
        bairro: '',
        married: false,
        whatsapp: '',
        // @ts-ignore
        address: null
    }
};

interface ErrorCadastroKids {
    firstName: boolean;
    lastName: boolean;
    birthDate: boolean;
    whatsapp: boolean;
    email: boolean;
    address: boolean;
    children: boolean;
}

export interface ValidateCadastroKids {
    isValid?: boolean;
    form?: Form.CadastroKids;
    errors?: ErrorCadastroKids;
}

export const validateCadastroKids = async (cadastro: ValidateCadastroKids): Promise<ValidateCadastroKids> => {
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
    if (!vCadastro?.form?.job && vCadastro?.form?.job === '') {
        // @ts-ignore
        vCadastro.errors.job = true;
        vCadastro.isValid = false;
    }
    // @ts-ignore
    if (!vCadastro?.form?.children.length < 0 || hasEmptyField(vCadastro.form?.children)) {
        // @ts-ignore
        vCadastro.errors.children = true;
        vCadastro.isValid = false;
    }

    return vCadastro;
};
