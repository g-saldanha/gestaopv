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

    if (vCadastro?.form?.volunteer !== null) {
        // @ts-ignore
        vCadastro.form.membership = vCadastro.form.volunteer ? 'Voluntário(a)' : 'Membro(a)';
    } else {
        // @ts-ignore
        vCadastro.errors.membership = true;
        vCadastro.isValid = false;
    }

    if (vCadastro?.form?.married !== null) {
        if (vCadastro?.form?.married === true) {
            // @ts-ignore
            vCadastro.form.maritalStatus = 'Married';
        } else {
            // @ts-ignore
            vCadastro.form.maritalStatus = 'Solteiro(a)';
        }
    } else {
        // @ts-ignore
        vCadastro.errors.married = true;
        vCadastro.isValid = false;
    }

    if (!vCadastro?.form?.campus) {
        // @ts-ignore
        vCadastro.errors.campus = true;
        vCadastro.isValid = false;
    }


    // @ts-ignore
    if (!vCadastro?.form?.job && vCadastro?.form?.job === '') {
        // @ts-ignore
        vCadastro.errors.job = true;
        vCadastro.isValid = false;
    }

    return vCadastro;
};
