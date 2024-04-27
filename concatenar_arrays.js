/* const nome = ['Adriely', 'Yasmin', 'Carlos', 'Carlos Maurício'];
const profissao = ['Desenvolvedora Front-End', 'Médica', 'Empresário', 'Advogado'];

const lista = (nome.concat(profissao));

console.log(lista);

ACIMA É COMO EU FIZ, ABAIXO COMO A PROF FEZ*/

function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2); // Concatena os dois arrays
}

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const concatenatedArray = concatenateArrays(array1, array2);
console.log(concatenatedArray); // Saída: [1, 2, 3, 4, 5, 6]