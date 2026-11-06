const prompt = require("prompt-sync")();

// 1. Arrow function para calcular o subtotal
const calcularSubtotal = (preco, quantity) => preco * quantity;

// 2. Arrow function que chama a anterior e soma o frete
const calcularTotalComFrete = (preco, quantity, frete) => {
    const subtotal = calcularSubtotal(preco, quantity);
    return subtotal + frete;
};

// 3. Leitura dos dados no terminal
const preco = Number(prompt("Preço do produto: "));
const quantidade = Number(prompt("Quantidade: "));
const frete = Number(prompt("Valor do frete: "));

// 4. Cálculo do total invocando a função principal
const total = calcularTotalComFrete(preco, quantidade, frete);

// Imprime o resultado no console
console.log("Total:", total);

// 5. Exportação da variável para os testes automatizados
module.exports = total;
