declare namespace Wed {
    interface Usuario {
        idUsuario: number;
        nomeUsuario: string;
        email: string;
        senha: string;
        is_Noivos: boolean | null;
        is_Profissional: boolean | null;
        is_Admin: boolean | null;
        dataCriacao: string;
        dataCadastro: string;
        is_PrimeiroAcesso: boolean | null;
        is_Validado: boolean | null;
        ultimoAcesso: string;
        is_SenhaExpirada: boolean | null;
        dataExpiracao: string;
        randomToken: string;
        fotoPerfil: string;
        fotoPerfilLink: string;
        fotoPerfilBase64: string | null;
    }

    interface Profissional {
        idProfissional: number;
        idUsuario: number;
        nomeEmpresa: string;
        email: string;
        numeroContato: string;
        cidade: string;
        estado: string;
        enderecoComercial: string;
        numeroCPF: string;
        is_CNPJ: boolean | null;
        numeroCNPJ: string;
        descricaoEmpresa: string;
        categoria: string;
        segmento: string;
        valorMinimo: string;
        maisDeUmEventoPorDia: boolean;
        formasPagamento: string;
        trabalhaSozinho: boolean;
        nivelConta: number;
        pontosAcumulados: number;
        classificacao: null;
        visitasVitrine: number;
        orcamentosRecebidos: number;
        casamentosBemSucedidos: number;
        tokenConvite: string;
        is_CadastroPorConvite: boolean | null;
        idUsuarioConvite: null;
        destaque: boolean | null;
    }

    interface ImagemVitrine {
        idImagem: number;
        nomeImagem: string;
        urlImagem: string;
        idProfissional: number;
        inUso: boolean | null;
        imagemPrincipal: boolean | null;
        imagemBase64: string | null;
    }

    interface Profissionais {
        listaImagensVitrine: ImagemVitrine[];
        motivoBloqueioMarketplace: [];
        profisisonalVisivel: boolean | null;
        profissional: Profissional;
        usuario: Usuario;
    }


    interface Orcamento {
        idProfissional: number;
        nomeEmpresa: string;
        dataOrcamento: string | Date;
        nomeCliente: string;
    }

    export interface Destaque {
        idDestaque: number;
        idProfissional: number;
        nomeProfissional: string;
        segmento: string;
        valorMinimo: string;
        cidade: string;
        nivelStatusConta: string;
        estado: string;
        imagemVitrine: string;
    }

    export interface AtividadeSistema {
        datareg?: Date;
        idAtividade: number;
        atividade: string;
        idUsuario: number;
        dataRegistro: string;
    }
}
