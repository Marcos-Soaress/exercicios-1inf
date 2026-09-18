const cliente = "Lucas Almeida";
const produto = "Notebook Gamer";
const preco = 4500;
const quantidade = 2;
const estoque = 10;
const valorPago = 9000;

const subtotal = preco * quantidade;

const estoqueDisponivel = quantidade <= estoque ? "Sim" : "Não";

const descontoPercentual = subtotal >= 1000 ? 10 : 0;

const valorDesconto = subtotal * (descontoPercentual / 100);

const valorFinal = subtotal - valorDesconto;

const pagamentoStatus = valorPago >= valorFinal
    ? "Pagamento aprovado"
    : "Pagamento insuficiente";

const troco = valorPago >= valorFinal
    ? valorPago - valorFinal
    : 0;

const statusPedido = quantidade <= estoque
    ? "Pedido disponível para finalização"
    : "Pedido não pode ser finalizado por falta de estoque";

const resumo = `
Cliente: ${cliente}
Produto: ${produto}
Preço: R$ ${preco}
Quantidade: ${quantidade}
Estoque: ${estoque}
Subtotal: R$ ${subtotal}
Desconto: ${descontoPercentual}%
Valor do desconto: R$ ${valorDesconto}
Valor final: R$ ${valorFinal}
Estoque disponível: ${estoqueDisponivel}
Valor pago: R$ ${valorPago}
Pagamento: ${pagamentoStatus}
Troco: R$ ${troco}
Situação do pedido: ${statusPedido}
`;

module.exports = {
    cliente,
    produto,
    preco,
    quantidade,
    estoque,
    valorPago,
    subtotal,
    estoqueDisponivel,
    descontoPercentual,
    valorDesconto,
    valorFinal,
    pagamentoStatus,
    troco,
    statusPedido,
    resumo
};
