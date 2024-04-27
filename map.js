const notas = [10, 9.5, 8, 7, 6];

// const notasAtualizadas = notas.map(function (nota) {
//   return nota + 1;
// })

// PODE SER USADO ASSIM TAMBÉM COMO ABAIXO

   const notasAtualizadas = notas.map((nota) => nota + 1 >= 10 ? 10 : nota + 1);

   // OBS: acima: se o retorno for >= 10 retorna 10, se não retorna nota + 1

console.log(notasAtualizadas);