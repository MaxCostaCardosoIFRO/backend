import porVal from 'readline-sync';

function calcularAcrescimo(valor, porcentagem) {
    const acrescimo = (valor * porcentagem) / 100;
    return valor + acrescimo;
}


const valor = parseFloat(porVal.question("Digite o valor: "));
const porcentagem = parseFloat(porVal.question("Digite a porcentagem: "));

const valorComAcrescimo = calcularAcrescimo(valor, porcentagem);
console.log("Valor com acréscimo:", valorComAcrescimo);
