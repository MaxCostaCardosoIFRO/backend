let valor1 = parseFloat(prompt("Digite o primeiro valor:"));
let valor2 = parseFloat(prompt("Digite o segundo valor:"));
let operacao = prompt("Digite a operação desejada (+, -, *, /):");

let resultado;
switch (operacao) {
    case "+":
        resultado = valor1 + valor2;
        break;
    case "-":
        resultado = valor1 - valor2;
        break;
    case "*":
        resultado = valor1 * valor2;
        break;
    case "/":
        if (valor2 !== 0) {
            resultado = valor1 / valor2;
        } else {
            resultado = "Impossível dividir por zero.";
        }
        break;
    default:
        resultado = "Operação inválida.";
        break;
}

console.log("Resultado da operação:", resultado);
