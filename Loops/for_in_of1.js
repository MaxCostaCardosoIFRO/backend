const pessoa = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo"
};

for (let chave in pessoa) {
    console.log(`Chave: ${chave}, Valor: ${pessoa[chave]}`);
}
