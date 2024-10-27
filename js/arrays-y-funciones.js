/*Ejercicio 1: Encuentra el segundo mayor número
Enunciado: 
Dado un array de números enteros, escribe un programa que encuentre y devuelva el segundo número más grande del array. Si el array tiene menos de dos elementos, el programa debe devolver un mensaje indicando que no hay suficientes números.*/

let array = [5, 4, 3, 6, 7];
let max = [0];
let secondMax = null;

if (array.length < 2) {
  document.write("no hay suficinetes numeros");
}

for (let i = 1; i < array.length; i++) {
  if (array[i] > max) {
    max = array[i];
  }
}

document.write(`<br>El número más grande es:  ${max}</br>`);

for (let i = 0; i < array.length; i++) {
  if (array[i] !== max && (secondMax === null || array[i] > secondMax)) {
    secondMax = array[i];
  }
}

document.write("El segundo número más grande es:" + secondMax);
