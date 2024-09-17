declare namespace Form {
    interface Cadastro {
        firstName: string | null;
        lastName: string | null;
        birthDate: Date | null;
        email?: string | null;
        anniversary?: Date | null;
        children?: object[] | null;
        campus: string | null;
        job?: string | null;
        cep: string | null;
        bairro: string | null;
        married: boolean;
        whatsapp: string | undefined;
    }
}
