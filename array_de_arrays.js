const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

const lista = [alunos, medias];

console.log(
    `A aluna da posição 1 da lista é: ${lista[0][1]}.
    A nota dessa aluna é ${lista[1][1]}` // [1][1] acessa índice 1 do array lista, E o índice 1
);     // usar a c rase como acima, permite dar um enter e descer para a linha debaixo, o que não é possível com aspas.