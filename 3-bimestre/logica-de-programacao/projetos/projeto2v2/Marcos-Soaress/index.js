const cliente = "Bruno Alves";
const quadra = "Quadra de Society";
const valorUnidade = 60;
const periodo = 2;
const quantidadeReservada = 1;
const quadrasDisponiveis = 3;
const valorPago = 120;

const valorBase = valorUnidade * periodo;

let disponibilidadeStatus;

if (quantidadeReservada <= quadrasDisponiveis) {
    disponibilidadeStatus = "Quadras disponíveis";
} else {
    disponibilidadeStatus = "Quadras indisponíveis";
}

let descontoStatus;
let valorDesconto;

if (periodo >= 4) {
    descontoStatus = "Desconto aplicado";
    valorDesconto = 25;
} else {
    descontoStatus = "Sem desconto";
    valorDesconto = 0;
}

const valorFinal = valorBase - valorDesconto;

let pagamentoStatus;

if (valorPago >= valorFinal) {
    pagamentoStatus = "Reserva quitada";
} else {
    pagamentoStatus = "Reserva com saldo pendente";
}

let saldoDevedor;

if (valorPago >= valorFinal) {
    saldoDevedor = 0;
} else {
    saldoDevedor = valorFinal - valorPago;
}

let statusReserva;

if (quantidadeReservada <= quadrasDisponiveis) {
    if (valorPago >= valorFinal) {
        statusReserva = "Reserva confirmada";
    } else {
        statusReserva = "Reserva confirmada com saldo pendente";
    }
} else {
    statusReserva = "Reserva não pode ser confirmada: quadras indisponíveis";
}

const resumo = `
Cliente: ${cliente}
Quadra: ${quadra}
Valor por hora: R$ ${valorUnidade}
Horas reservadas: ${periodo}
Quadras solicitadas: ${quantidadeReservada}
Quadras disponíveis: ${quadrasDisponiveis}
Valor base: R$ ${valorBase}
Disponibilidade: ${disponibilidadeStatus}
Desconto: ${descontoStatus}
Valor do desconto: R$ ${valorDesconto}
Valor final: R$ ${valorFinal}
Valor pago: R$ ${valorPago}
Pagamento: ${pagamentoStatus}
Saldo devedor: R$ ${saldoDevedor}
Situação: ${statusReserva}
`;

module.exports = {
    cliente,
    quadra,
    valorUnidade,
    periodo,
    quantidadeReservada,
    quadrasDisponiveis,
    valorPago,
    valorBase,
    disponibilidadeStatus,
    descontoStatus,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    saldoDevedor,
    statusReserva,
    resumo
};
