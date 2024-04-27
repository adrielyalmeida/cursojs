const notas = [7, 7, 8, 9];
const novaListaNotas = [...notas, 10]; // reticencias espalha o array notas, e acrescenta o 10 depois

// spread operatorb - posso fazer assim, ou, vou comentar a linha de baixo e alterar a linha de cima com o novo modo de fazer
// novaListaNotas.push(10);

// let nota = 9.75;
// let novaNota = nota;

// nota = 10;

console.log(notas);
console.log(novaListaNotas);
