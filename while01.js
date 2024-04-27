import entradaDados from 'readline-sync' ;
 let num = entradaDados.question("diga um numero e farei a tabuada dele numero ");
 let contador = 1

 while (  contador <= 10 ) {


    console.log(" sua tabuada é: " + num * contador );   
    contador++
    
 }
console.log("fim");

