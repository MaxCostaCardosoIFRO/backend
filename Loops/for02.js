import Salpess from 'readline-sync' ;

let totalImpostoRenda = 0;

for (let i = 1; i <= 10; i++) {
    console.log(`Digite os dados da ${i}ª pessoa:`);
    let nome = Salpess.question("Nome: ");
    let salarioBruto = parseFloat(Salpess.question("Salário bruto: R$ "));
    
    let impostoRenda;
    if (salarioBruto <= 2100) {
        impostoRenda = 0;
    } else if (salarioBruto <= 2800) {
        impostoRenda = salarioBruto * 0.075;
    } else if (salarioBruto <= 3750) {
        impostoRenda = salarioBruto * 0.15;
    } else if (salarioBruto <= 4660) {
        impostoRenda = salarioBruto * 0.225;
    } else {
        impostoRenda = salarioBruto * 0.275;
    }
    
    totalImpostoRenda += impostoRenda;
    
    console.log(`Nome: ${nome}`);
    console.log(`Imposto de Renda a ser pago: R$ ${impostoRenda.toFixed(2)}\n`);
}

console.log(`Total de Imposto de Renda a ser pago: R$ ${totalImpostoRenda.toFixed(2)}`);
