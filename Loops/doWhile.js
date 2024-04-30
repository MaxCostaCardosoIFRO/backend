import entradaDadosNum from 'readline-sync' ;
 
 console.log("Bem-vindo ao jogo de adivinhação!");

let numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let tentativa;
let numeroUsuario;

do {
    numeroUsuario = parseInt(entradaDadosNum.question("Tente adivinhar o número (entre 1 e 100): "));
    
    if (numeroUsuario === numeroAleatorio) {
        console.log("Parabéns! Você acertou o número.");
    } else if (numeroUsuario < numeroAleatorio) {
        console.log("O número é maior.");
    } else {
        console.log("O número é menor.");
    }
    
    tentativa++;
} while (numeroUsuario !== numeroAleatorio);
