export const formatDate = (value: Date) => {
    return value.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};

export const formatDateTime = (value: Date) => {
    return value.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
    });
};


export const formatDatetoDayMonth = (value: Date | undefined) => {
    // @ts-ignore
    return value.toLocaleDateString('pt-BR', {
        day: '2-digit',
        month: '2-digit'
    });
};
