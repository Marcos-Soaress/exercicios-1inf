const nome = "Marcos Soares";
const idade = 26;
const categoria = "comum";
const possuiInscricao = true;
const suspenso = false;
const valorInscricao = 130;
const valorPago = 130;

// RF02 - Verificação da idade mínima
let idadeStatus;

if (idade >= 18) {
    idadeStatus = "Idade permitida";
} else {
    idadeStatus = "Idade não permitida";
}

// RF03 - Verificação do nível de acesso
let nivelAcesso;

if (categoria === "instrutor" || categoria === "coordenador") {
    nivelAcesso = "Acesso administrativo liberado";
} else {
    nivelAcesso = "Acesso comum";
}

// RF04 - Verificação da liberação de acesso
let acessoStatus;

if (idade >= 18 && possuiInscricao && !suspenso) {
    acessoStatus = "Entrada liberada";
} else {
    acessoStatus = "Entrada negada";
}

// RF05 - Verificação do pagamento
let pagamentoStatus;

if (valorPago >= valorInscricao) {
    pagamentoStatus = "Pagamento aprovado";
} else {
    pagamentoStatus = "Pagamento insuficiente";
}

// RF06 - Cálculo do troco
let troco;

if (valorPago >= valorInscricao) {
    troco = valorPago - valorInscricao;
} else {
    troco = 0;
}

// RF07 - Situação final
let statusWorkshop;

if (acessoStatus === "Entrada liberada" && pagamentoStatus === "Pagamento aprovado") {
    statusWorkshop = "Check-in do workshop confirmado";
} else {
    statusWorkshop = "Check-in do workshop não confirmado";
}

// RF08 - Resumo
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

// Exportação
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
