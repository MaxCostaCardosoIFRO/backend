
class Imovel {
    constructor(quartos, tipo, endereco) {
        this.quartos = quartos;
        this.tipo = tipo;
        this.endereco = endereco;
    }

 
    exibirInformacoes() {
        return `Tipo: ${this.tipo}, Quartos: ${this.quartos}, Endereço: ${this.endereco}`;
    }
}

let casa = new Imovel(4, "Casa", "Rua da Amizade, 789 - Bairro Alegre");
let apartamento = new Imovel(2, "Apartamento", "Avenida da Paz, 123 - Centro");


console.log("Informações da Casa:");
console.log(casa.exibirInformacoes());

console.log("\nInformações do Apartamento:");
console.log(apartamento.exibirInformacoes());
