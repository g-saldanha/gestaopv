const estados = [
    { value: 'AC', code: 'AC', name: 'Acre' },
    { value: 'AL', code: 'AL', name: 'Alagoas' },
    { value: 'AP', code: 'AP', name: 'Amapá' },
    { value: 'AM', code: 'AM', name: 'Amazonas' },
    { value: 'BA', code: 'BA', name: 'Bahia' },
    { value: 'CE', code: 'CE', name: 'Ceará' },
    { value: 'DF', code: 'DF', name: 'Distrito Federal' },
    { value: 'ES', code: 'ES', name: 'Espírito Santo' },
    { value: 'GO', code: 'GO', name: 'Goiás' },
    { value: 'MA', code: 'MA', name: 'Maranhão' },
    { value: 'MT', code: 'MT', name: 'Mato Grosso' },
    { value: 'MS', code: 'MS', name: 'Mato Grosso do Sul' },
    { value: 'MG', code: 'MG', name: 'Minas Gerais' },
    { value: 'PA', code: 'PA', name: 'Pará' },
    { value: 'PB', code: 'PB', name: 'Paraíba' },
    { value: 'PR', code: 'PR', name: 'Paraná' },
    { value: 'PE', code: 'PE', name: 'Pernambuco' },
    { value: 'PI', code: 'PI', name: 'Piauí' },
    { value: 'RJ', code: 'RJ', name: 'Rio de Janeiro' },
    { value: 'RN', code: 'RN', name: 'Rio Grande do Norte' },
    { value: 'RS', code: 'RS', name: 'Rio Grande do Sul' },
    { value: 'RO', code: 'RO', name: 'Rondônia' },
    { value: 'RR', code: 'RR', name: 'Roraima' },
    { value: 'SC', code: 'SC', name: 'Santa Catarina' },
    { value: 'SP', code: 'SP', name: 'São Paulo' },
    { value: 'SP-CE', code: 'SP-CE', name: 'São Paulo - Centro' },
    { value: 'SP-ZL', code: 'SP-ZL', name: 'São Paulo - Zona Leste' },
    { value: 'SP-ZN', code: 'SP-ZN', name: 'São Paulo - Zona Norte' },
    { value: 'SP-ZO', code: 'SP-ZO', name: 'São Paulo - Zona Oeste' },
    { value: 'SP-ZS', code: 'SP-ZS', name: 'São Paulo - Zona Sul' },
    { value: 'SE', code: 'SE', name: 'Sergipe' },
    { value: 'TO', code: 'TO', name: 'Tocantins' }
];

const optionsSegmento = [
    {
        value: 'Acessórios de noiva',
        label: 'Acessórios de noiva',
        children: [
            {
                value: 'Acessórios para cabelo',
                label: 'Acessórios para cabelo'
            },
            {
                value: 'Lingeries',
                label: 'Lingeries'
            },
            {
                value: 'Sapatos',
                label: 'Sapatos'
            }
        ]
    },
    {
        value: 'Agências de Lua de mel',
        label: 'Agências de Lua de mel',
        children: [
            {
                value: 'Agências de Viagem',
                label: 'Agências de Viagem'
            },
            {
                value: 'Hotéis para lua de mel',
                label: 'Hotéis para lua de mel'
            }
        ]
    },
    {
        value: 'Assessoria e Cerimonial',
        label: 'Assessoria e Cerimonial',
        children: [
            {
                value: 'Cerimonialista',
                label: 'Cerimonialista'
            },
            {
                value: 'Celebrante',
                label: 'Celebrante'
            }
        ]
    },
    {
        value: 'Beleza e dia da noiva',
        label: 'Beleza e dia da noiva',
        children: [
            {
                value: 'Cabelo e maquiagem',
                label: 'Cabelo e maquiagem'
            },
            {
                value: 'Espaço de beleza',
                label: 'Espaço de beleza'
            }
        ]
    },
    {
        value: 'Buffet, bebibas, bolos e doces',
        label: 'Buffet, bebibas, bolos e doces',
        children: [
            {
                value: 'Bebidas e serviços de bar',
                label: 'Bebidas e serviços de bar'
            },
            {
                value: 'Bolos e docer para casamentos',
                label: 'Bolos e docer para casamentos'
            },
            {
                value: 'Buffets e banquetes',
                label: 'Buffets e banquetes'
            }
        ]
    },
    {
        value: 'Convites',
        label: 'Convites'
    },
    {
        value: 'Decoração de casamentos',
        label: 'Decoração de casamentos',
        children: [
            {
                value: 'Aluguel de móveis e materiais',
                label: 'Aluguel de móveis e materiais'
            },
            {
                value: 'Decoradores de casamento',
                label: 'Decoradores de casamento'
            }
        ]
    },
    {
        value: 'Flores e buquês',
        label: 'Flores e buquês'
    },
    {
        value: 'Foto e vídeo para casamentos',
        label: 'Foto e vídeo para casamentos',
        children: [
            {
                value: 'Fotografia',
                label: 'Fotografia'
            },
            {
                value: 'Filmagem',
                label: 'Filmagem'
            },
            {
                value: 'Fotografia e Filmagem',
                label: 'Fotografia e Filmagem'
            },
            {
                value: 'Cabine de fotos',
                label: 'Cabine de fotos'
            },
            {
                value: 'Plataforma 360°',
                label: 'Plataforma 360°'
            }
        ]
    },
    {
        value: 'Joalheria para casamentos',
        label: 'Joalheria para casamentos'
    },
    {
        value: 'Lembranças e detalhes',
        label: 'Lembranças e detalhes'
    },
    {
        value: 'Espaço para casamentos',
        label: 'Espaço para casamentos',
        children: [
            {
                value: 'Fazenda e Sítios',
                label: 'Fazenda e Sítios'
            },
            {
                value: 'Hotéis e pousadas',
                label: 'Hotéis e pousadas'
            },
            {
                value: 'Restaurante',
                label: 'Restaurante'
            },
            {
                value: 'Recepção',
                label: 'Recepção (Obsoleto)'
            },
            {
                value: 'Chácara',
                label: 'Chácara'
            },
            {
                value: 'Casa de casamento',
                label: 'Casa de casamento'
            },
            {
                value: 'Salão',
                label: 'Salão'
            }
        ]
    },
    {
        value: 'Música e iluminação',
        label: 'Música e iluminação',
        children: [
            {
                value: 'Animação para casamento',
                label: 'Animação para casamento'
            },
            {
                value: 'DJ casamento',
                label: 'DJ casamento'
            },
            {
                value: 'Despedida de solteiro',
                label: 'Despedida de solteiro (Obsoleto)'
            },
            {
                value: 'Aluguel de som e iluminação',
                label: 'Aluguel de som e iluminação'
            },
            {
                value: 'Músico ou Banda',
                label: 'Músico ou Banda'
            }
        ]
    },
    {
        value: 'Roupas para convidados',
        label: 'Roupas para convidados',
        children: [
            {
                value: 'Daminhas e pajens',
                label: 'Daminhas e pajens'
            },
            {
                value: 'Ventidos para festa',
                label: 'Ventidos para festa'
            }
        ]
    },
    {
        value: 'Trajes para noivos',
        label: 'Trajes para noivos',
        children: [
            {
                value: 'Aluguel de trajes de noivo',
                label: 'Aluguel de trajes de noivo'
            },
            {
                value: 'Loja de ternos',
                label: 'Loja de ternos'
            }
        ]
    },
    {
        value: 'Transporte para casamento',
        label: 'Transporte para casamento',
        children: [
            {
                value: 'Aluguel de carros',
                label: 'Aluguel de carros'
            },
            {
                value: 'Aluguel de ônibus e vans',
                label: 'Aluguel de ônibus e vans'
            }
        ]
    },
    {
        value: 'Vestido de noiva',
        label: 'Vestido de noiva',
        children: [
            {
                value: 'Aluguel de vestidos de noiva',
                label: 'Aluguel de vestidos de noiva'
            },
            {
                value: 'Estilista de vestidos de noiva',
                label: 'Estilista de vestidos de noiva'
            },
            {
                value: 'Loja de vestidos de noiva',
                label: 'Loja de vestidos de noiva'
            }
        ]
    },
    {
        value: 'Outros',
        label: 'Outros',
        children: [
            {
                value: 'Chá de panela',
                label: 'Chá de panela'
            },
            {
                value: 'Coreografia para casamento',
                label: 'Coreografia para casamento'
            },
            {
                value: 'Serviços diversos',
                label: 'Serviços diversos'
            }
        ]
    }
];

const planos = [
    { value: 1, code: 1, name: 'Free' },
    { value: 2, code: 2, name: 'Start' },
    { value: 3, code: 3, name: 'Ouro' },
    { value: 4, code: 4, name: 'Diamante' }
];

const getPlano = (plano: number) => {
    switch (plano) {
        case 1:
            return 'FREE';
        case 2:
            return 'START';
        case 3:
            return 'OURO';
        case 4:
            return 'DIAMANTE';
        default:
            return 'FREE';
    }
};

const formasPagamento = [
    { value: 'Dinheiro', code: 'Dinheiro', name: 'Dinheiro' },
    { value: 'Boleto bancário', code: 'Boleto bancário', name: 'Boleto bancário' },
    { value: 'Pix', code: 'Pix', name: 'Pix' },
    { value: 'Cartão de crédito', code: 'Cartão de crédito', name: 'Cartão de crédito' },
    { value: 'Cartão de débito', code: 'Cartão de débito', name: 'Cartão de débito' },
    { value: 'Transferência bancária', code: 'Transferência bancária', name: 'Transferência bancária' },
    { value: 'Outros', code: 'Outros', name: 'Outros' }
];
export default {
    estados,
    planos,
    optionsSegmento,
    getPlano,
    formasPagamento
};
