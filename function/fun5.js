import descontoProduto from 'readline-sync';

function calcularValorComDesconto(valorOriginal, percentualDesconto) {
    const desconto = (valorOriginal * percentualDesconto) / 100;
    const valorComDesconto = valorOriginal - desconto;
    return valorComDesconto;
}


const valorOriginal = parseFloat(descontoProduto.question("Digite o valor original do produto: "));
const percentualDesconto = parseFloat(descontoProduto.question("Digite o percentual de desconto (%): "));

const valorFinal = calcularValorComDesconto(valorOriginal, percentualDesconto);
console.log(`O valor final com desconto é: R$ ${valorFinal.toFixed(2)}`);
