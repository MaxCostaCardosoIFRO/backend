let categoria = prompt("Digite a categoria de bonificação (A, B, C ou D):");
let salarioAtual = parseFloat(prompt("Digite o salário atual do funcionário:"));

let novoSalario;
switch (categoria.toUpperCase()) {
    case "A":
        novoSalario = salarioAtual * 1.05; 
        break;
    case "B":
        novoSalario = salarioAtual * 1.10;
        break;
    case "C":
        novoSalario = salarioAtual * 1.15; 
        break;
    case "D":
        novoSalario = salarioAtual * 1.20; 
        break;
    default:
        console.log("Categoria de bonificação inválida.");
        break;
}

if (novoSalario) {
    console.log("Novo salário: R$" + novoSalario.toFixed(2));
}
