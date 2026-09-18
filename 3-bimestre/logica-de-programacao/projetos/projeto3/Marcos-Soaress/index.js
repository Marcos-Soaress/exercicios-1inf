const nome = "Marcos Soares";
const idade = 26;
const categoria = "comum";
const possuiInscricao = true;
const suspenso = false;
const valorInscricao = 130;
const valorPago = 130;

let idadeStatus;

if (idade >= 18) {
    idadeStatus = "Idade permitida";
} else {
    idadeStatus = "Idade não permitida";
}

let nivelAcesso;

if (categoria === "instrutor" || categoria === "coordenador") {
    nivelAcesso = "Acesso administrativo liberado";
} else {
    nivelAcesso = "Acesso comum";
}

let acessoStatus;

if (idade >= 18 && possuiInscricao && !suspenso) {
    acessoStatus = "Entrada liberada";
} else {
    acessoStatus = "Entrada negada";
}

let pagamentoStatus;

if (valorPago >= valorInscricao) {
    pagamentoStatus = "Pagamento aprovado";
} else {
    pagamentoStatus = "Pagamento insuficiente";
}
let troco;

if (valorPago >= valorInscricao) {
    troco = valorPago - valorInscricao;
} else {
    troco = 0;
}

let statusWorkshop;

if (acessoStatus === "Entrada liberada" && pagamentoStatus === "Pagamento aprovado") {
    statusWorkshop = "Check-in do workshop confirmado";
} else {
    statusWorkshop = "Check-in do workshop não confirmado";
}

const resumo = `
===== ENTRADA NO WORKSHOP =====

Nome: ${nome}
Categoria: ${categoria}
Nível de acesso: ${nivelAcesso}
Valor da inscrição: R$ ${valorInscricao}
Valor pago: R$ ${valorPago}
Troco: R$ ${troco}
Situação do acesso: ${acessoStatus}
Situação do pagamento: ${pagamentoStatus}
Situação final: ${statusWorkshop}
`;

module.exports = {
    nome,
    idade,
    categoria,
    possuiInscricao,
    suspenso,
    valorInscricao,
    valorPago,
    idadeStatus,
    nivelAcesso,
    acessoStatus,
    pagamentoStatus,
    troco,
    statusWorkshop,
    resumo
};
