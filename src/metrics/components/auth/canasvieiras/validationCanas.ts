import { CadastroService } from '@/metrics/service/CadastroService';
import validator from 'validator';
import { FormCanas } from '../../../../../types/form';


export const initCadastroCanas: ValidateCadastroCanas = {
    isValid: false,
    errors: {
        firstName: false,
        lastName: false,
        whatsapp: false,
        email: false,
        address: false
    },
    form: {
        firstName: '',
        lastName: '',
        email: '',
        cep: '',
        bairro: '',
        whatsapp: '',
        // @ts-ignore
        address: null
    }
};

interface ErrorCadastro {
    firstName: boolean;
    lastName: boolean;
    whatsapp: boolean;
    email?: boolean;
    address: boolean;
}

export interface ValidateCadastroCanas {
    isValid?: boolean;
    form?: FormCanas.Conexao;
    errors?: ErrorCadastro;
}

export const validateCadastroCanas = async (cadastro: ValidateCadastroCanas): Promise<ValidateCadastroCanas> => {
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

    return vCadastro;
};
