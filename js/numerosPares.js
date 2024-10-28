/*Escribe un programa que tome un array de números enteros y devuelva un nuevo array que solo contenga los números pares. Si no hay números pares, el programa debe devolver un array vacío.*/

function numerosPares(array) {
  let pares = [];

  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      pares.push(array[i]);
    }
  }
  return pares;
}

let numeros = [1, 3, 4, 7, 8, 10];
let losNumerosPares = numerosPares(numeros);
document.write("Números pares: ", losNumerosPares);
