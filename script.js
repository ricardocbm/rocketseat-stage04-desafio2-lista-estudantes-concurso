/*

Crie uma lista de **estudantes** e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso
 e mostre uma mensagem na tela

*/

const estudantes = [
  {
    nome: "Maria",
    nota1: 10,
    nota2: 9,
  },

  {
    nome: "João",
    nota1: 4,
    nota2: 7,
  },

  {
    nome: "Carlos",
    nota1: 4,
    nota2: 7,
  },
];

// Função que gera uma string com a média do estudante
function printMediaEstudante(estudante) {
  return `
Estudante ${estudante.nome} teve média ${
    (estudante.nota1 + estudante.nota2) / 2
  }`;
}

// Loop para cada estudante no array estudantes
for (let estudante of estudantes) {
  if ((estudante.nota1 + estudante.nota2) / 2 >= 7) {
    // Se a média for maior ou igual a 7, exibe uma mensagem de aprovação
    alert(`${printMediaEstudante(estudante)}. Você passou, parabéns!`);
  } else {
    // Caso contrário, exibe uma mensagem de reprovação
    alert(`${printMediaEstudante(estudante)}. Você não passou. Não desista!`);
  }
}
