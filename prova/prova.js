//faça um programa que peça  uma forma ao usuário e faça a área dele, quadrado, circulo, retângulo

import entradaDados from 'readline-sync';


let forma = parseFloat(entradaDados.question("Olá, escolha um dos números a seguir para escolher a forma geométrica que deseja saber a área:    \n 1: Quadrado \n 2: Círculo \n 3: Retângulo  \n 4: Fechar a aplicação \n "));


let continua = 1
while (continua == 1) {

    
    let lado = parseFloat(entradaDados.question("diga o valor do lado do seu quadrado: "));
    console.log("A área do seu quadrado é: " + lado ** lado)
    5
    if (forma == 2) {

        let pi = 3.14;
        let raio = parseFloat(entradaDados.question("Diga o valor do seu raio: "));
        console.log("A área do seu círculo é: " + pi * raio)

    } else if (forma == 3) {

        let base = parseFloat(entradaDados.question("diga o valor da base: "));
        let altura = parseFloat(entradaDados.question("diga o valor da altura: "));


        console.log("A área do seu retângulo é: " + base ** altura)

        if (forma == 4) {
            break;
        }
    }
}


