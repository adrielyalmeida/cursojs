// Dividir esse array abaixo em 2

const listaEstudantes = ["João", "Juliana", "Ana", "Caio", "Lara", "Marjorie", "Guilherme", "Aline", "Fabiana", "André", "Carlos", "Paulo", "Bia", "Vivian", "Isabela", "Vinícius", "Renan", "Renata", "Daisy", "Camilo", "Adriely"];

const sala1 = listaEstudantes.slice(0, listaEstudantes.length/2);  // (início e fim) no caso o fim, não é add e será add no início da próxima const
const sala2 = listaEstudantes.slice(listaEstudantes.length/2);

console.log(sala1);
console.log(sala2);