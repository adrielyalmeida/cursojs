const numeros = [10, 8, 6, 9, 7, 5];
let soma = 0;

for (let i = 0; i < numeros.length; i++) {
  soma += numeros[i];
}

const media = soma / numeros.length;
console.log('Array:', numeros);
console.log('Média dos números:', media);