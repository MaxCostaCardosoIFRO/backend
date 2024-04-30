import somaNum from 'readline-sync';

function somarNumeros(numero1, numero2) {
    return numero1 + numero2;
}

// Solicitar entrada do usuário
const numero1 = parseInt(somaNum.question("Digite o primeiro número: "));
const numero2 = parseInt(somaNum.question("Digite o segundo número: "));

const resultado = somarNumeros(numero1, numero2);
console.log("A soma dos números é:", resultado);
