const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function(nota) {
    somaDasNotas += nota;
})

// AQUI VOU FAZER A FUNÇÃO SEPARADA PARA ENTENDER MELHOR

// notas.forEach(somaNotas);

// function somaNotas (nota) {
//  somaDasNotas += nota;
//}

const media = somaDasNotas / notas. length;

console.log(`A média das notas é ${media}`);