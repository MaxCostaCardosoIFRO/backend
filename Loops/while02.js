import entradaDados from 'readline-sync';



let numAlunos = entradaDados.question("Diga a quantidade de alunos: ");
let intNumAlun = parseInt(numAlunos);

let contador = 1;
let totalNotasTurma = 0;

while (contador <= intNumAlun) {
    let nota1 = entradaDados.question(`Nota do ${contador}º aluno no 1° Bimestre: `);
    let intalun1 = parseInt(nota1);

    let nota2 = entradaDados.question(`Nota do ${contador}º aluno no 2° Bimestre: `);
    let intalun2 = parseInt(nota2);

    let nota3 = entradaDados.question(`Nota do ${contador}º aluno no 3° Bimestre: `);
    let intalun3 = parseInt(nota3);

    let nota4 = entradaDados.question(`Nota do ${contador}º aluno no 4° Bimestre: `);
    let intalun4 = parseInt(nota4);

    let mediaAlun = (intalun1 + intalun2 + intalun3 + intalun4) / 4;
    console.log(`Média do ${contador}º aluno: ${mediaAlun.toFixed(2)}`);

    totalNotasTurma += mediaAlun;
    contador++;
}

let mediaTurma = totalNotasTurma / intNumAlun;
console.log(`Média da turma: ${mediaTurma.toFixed(2)}`);