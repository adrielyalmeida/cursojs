const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

const reprovados = alunos.filter((_, indice) => { // posso colocar no primeiro parâmetro um underline, para identificar um parâmetro que não está sendo usado
    return medias[indice] < 7;
});

console.log(reprovados);