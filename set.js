const nomes = ['Ana', 'Clara', 'Maria', 'Maria', 'João', 'João', 'João'];

const nomesAtualizados = new Set(nomes); // set é um conjunto que armazena nomes únicos, tira os repetidos. PARECE UM ARRAY MAS NÃO É. PARA FUNÇÕES QUE FUNCIONAM EM ARRAY, FUNCIONAR AÍ, TEREMOS QUE TRANSFORMAR ESSA LISTA NUM ARRAY, COMO ABAIXO

//Transformando a lista em array
const listaNomesAtualizados = [...nomesAtualizados];

console.log(nomesAtualizados);
console.log(listaNomesAtualizados);