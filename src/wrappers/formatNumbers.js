export const formatBalance = (number, currency = 'BRL') => new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency,
}).format(number);
