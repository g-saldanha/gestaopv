import { CadastroService } from '@/metrics/service/CadastroService';
import validator from 'validator';

export interface ValidateCadastro {
    isValid?: boolean;
    form?: Form.Cadastro;
    errors?: any;
}

export const validateCadastro = async (form: any): Promise<ValidateCadastro> => {
    const formResult = {
        isValid: true,
        form: null,
        errors: null
    };

    if (form.firstName && form.firstName.length > 1) {
        // @ts-ignore
        formResult.form.firstName = form.firstName;
    } else {
        // @ts-ignore
        formResult.errors.firstName = true;
        formResult.isValid = false;
    }

    if (form.lastName && form.lastName.length > 1) {
        // @ts-ignore
        formResult.form.lastName = form.lastName;
    } else {
        // @ts-ignore
        formResult.errors.lastName = true;
        formResult.isValid = false;
    }

    if (form.birthDate) {
        // @ts-ignore
        formResult.form.birthDate = form.birthDate;
    } else {
        // @ts-ignore
        formResult.errors.birthDate = true;
        formResult.isValid = false;
    }

    if (form.whatsapp && await CadastroService.checkWhatsapp(form.whatsapp)) {
        // @ts-ignore
        formResult.form.whatsapp = form.whatsapp;
    } else {
        // @ts-ignore
        formResult.errors.whatsapp = true;
        formResult.isValid = false;
    }

    if (form.email && form.firstName.length > 1 && validator.isEmail(form.email)) {
        // @ts-ignore
        formResult.form.email = form.email;
    } else {
        // @ts-ignore
        formResult.errors.email = true;
        formResult.isValid = false;
    }

    if (form.address && form.address.length > 1) {
        // @ts-ignore
        formResult.form.address = form.address;
    } else {
        // @ts-ignore
        formResult.errors.address = true;
        formResult.isValid = false;
    }

    if (form.volunteer !== null) {
        // @ts-ignore
        formResult.form.membership = form.volunteer === true ? 'Membro(a)' : 'Voluntário(a)';
    } else {
        // @ts-ignore
        formResult.errors.membership = true;
        formResult.isValid = false;
    }

    if (form.married !== null) {
        if (form.married === true) {
            // @ts-ignore
            formResult.form.maritalStatus = 'Married';
            if (form?.anniversary) {
                // @ts-ignore
                formResult.form.anniversary = form.anniversary;
            }
        } else {
            // @ts-ignore
            formResult.form.maritalStatus = 'Solteiro(a)';
        }
    } else {
        // @ts-ignore
        formResult.errors.married = true;
        formResult.isValid = false;
    }

    if (form.campus && form.campus.length > 1) {
        // @ts-ignore
        formResult.form.campus = form.campus;
    } else {
        // @ts-ignore
        formResult.errors.campus = true;
        formResult.isValid = false;
    }
    if (form.address && form.address.length > 1) {
        // @ts-ignore
        formResult.form.address = form.address;
    } else {
        // @ts-ignore
        formResult.errors.address = true;
        formResult.isValid = false;
    }

    return formResult as unknown as ValidateCadastro;
};
