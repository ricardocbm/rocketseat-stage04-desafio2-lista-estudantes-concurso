/*

Com javascript, crie uma lista de tres **estudantes**  e, cada estudante dentro dessa lista, deverá conter os seguintes dados:

- nome;
- nota da primeira prova;
- nota da segunda prova.

Depois de criada a lista:

- [ ]  Crie uma função que irá calcular a média das notas de cada aluno;
- [ ]  Supondo que a média, para esse concurso é 7, verifique se cada aluno obteve sucesso ou não em entrar no concurso e mostre uma mensagem na tela

*/

// Criar uma lista de estudantes
const estudantes = [
  { nome: "Maria", nota1: 8, nota2: 6 },
  { nome: "Wandierdson", nota1: 7, nota2: 8 },
  { nome: "Capita Marvel", nota1: 6, nota2: 9 },
];

// Função para calcular a média das notas de um estudante
function calcularMedia(estudante) {
  return ((estudante.nota1 + estudante.nota2) / 2).toFixed(2);
}

// Função para verificar se um estudante obteve sucesso
function verificarSucesso(estudante) {
  const media = calcularMedia(estudante);
  if (media >= 7) {
    return `${estudante.nome} teve média ${media.toFixed(
      2
    )} e passou no concurso!`;
  } else {
    return `${estudante.nome} teve média ${media.toFixed(
      2
    )} e não passou no concurso.`;
  }
}

// Verificar o sucesso de cada estudante e mostrar na tela
estudantes.forEach((estudante) => {
  console.log(verificarSucesso(estudante));
});
