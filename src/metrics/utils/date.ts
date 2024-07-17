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

export const getPastMonths = () => {
    const months = [
        'Todos', 'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    const currentDate = new Date();
    const currentMonth = currentDate.getMonth() + 2; // Janeiro é 0, Dezembro é 11

    return months.slice(0, currentMonth);
};
