const cliente = "Lucas Almeida"
const produto = "Notebook Gamer"
const preco = 4500
const quantidade = 2
const estoque = 10
const valorPago = 9000
const subtotal = preco * quantidade

let descontoPercentual = 0
if (subtotal >= 1000) {
    descontoPercentual = 10
}

const valorDesconto = subtotal * descontoPercentual / 100
const valorFinal = subtotal - valorDesconto

let troco = "Aguardando"
let statusPedido = "Aguardo"
let pagamentoStatus = "Aguardando"
let estoqueDisponivel = "Verificando"

if (estoque >= quantidade){
    estoqueDisponivel = "Estoque disponível"
    statusPedido = "Pedido disponível para finalização"
} else{
    statusPedido = "Pedido não pode ser finalizado por falta de estoque"
    estoqueDisponivel = "Indisponível"
}

if (valorPago >= valorFinal) {
    pagamentoStatus = "Pagamento aprovado"
    troco = valorPago - valorFinal
    
} else {
    pagamentoStatus = "Pagamento insuficiente"
    troco = 0
}

console.log(`cliente ${cliente},realizou o pedido de um ${produto} pagando ${valorPago} e obtendo ${troco} de troco.`)

const resumo = `cliente: ${cliente}
produto: ${produto}
preco: R$${preco}
quantidade: ${quantidade}
estoque: ${estoque}
valor Pago: R$${valorPago}
desconto Percentual: ${descontoPercentual}%
valor Desconto: R$ ${valorDesconto}
valor Final R$ ${valorFinal}
troco R$ ${troco}
pagamento: ${pagamentoStatus}
situação do estoque: ${estoqueDisponivel}
status do pedido: ${statusPedido}`

console.log(resumo)

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
}
