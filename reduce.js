const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia (ListaDeNotas) { // parâmetros abaixo: acumulador, e o que está sendo iterado
    const somaDasNotas = ListaDeNotas.reduce((acumulador, nota) => {
            return acumulador + nota;
    }, 0); // esse zero é o valor inicial pra ser acumulado

    const media = somaDasNotas / ListaDeNotas.length;
    return media;
}  //tudo dentro da função

console.log(calculaMedia(salaJS));
console.log(calculaMedia(salaJava));
console.log(calculaMedia(salaPython));


// como só tem 1 parâmetro na function, pode ser feito como abaixo

// function calculaMedia (ListaDeNotas) {
//    const somaDasNotas = ListaDeNotas.reduce((acumulador, nota) => acumulador + nota, 0);

// const media = somaDasNotas / ListaDeNotas.length;
// return media;    O RESTO É IGUAL