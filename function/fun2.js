import numparim from 'readline-sync' ;

function verificarParOuImpar(numero) {
    if (numero % 2 === 0) {
        return "O número é par.";
    } else {
        return "O número é ímpar.";
    }
}


const numero = numparim.question("Digite um número: ");
const resultado = verificarParOuImpar(numero);
console.log(resultado);
