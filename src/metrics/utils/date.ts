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


export const getMonth = (month: string) => {
    const months = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
    ];

    return months.indexOf(month);
};

export function findMinMaxDates(array: Metrics.Culto[]) {
    if (array.length === 0) return { minDate: null, maxDate: null };

    let minDate = array[0].data;
    let maxDate = array[0].data;

    array.forEach(item => {
        const itemDate = item.data;
        // @ts-ignore
        if (itemDate < minDate) minDate = itemDate;
        // @ts-ignore
        if (itemDate > maxDate) maxDate = itemDate;
    });

    return { minDate, maxDate };
}
