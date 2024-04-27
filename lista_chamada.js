const listaChamada = ["João", "Ana", "Caio", "Lara", "Marjorie", "Leo"];

listaChamada.splice(1, 2, "Rodrigo"); // primeiro parâmetro - o primeiro índice a ser deletado. segundo parâmetro - a quantidade de elementos que vão ser deletados. terceiro parâmetro - elemento que vai entrar no lugar dos que saíram..

// listaChamada.push("Rodrigo");     Poderia ser feito assim, mas o método splice já pede o elemento q vai ser incluído.

console.log (listaChamada);

