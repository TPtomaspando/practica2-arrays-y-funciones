/*Escribe un programa que reciba una palabra y cuente cuántas vocales tiene. El programa debe recorrer la palabra letra por letra y usar condicionales para verificar si cada letra es una vocal (a, e, i, o, u, tanto mayúsculas como minúsculas).*/

function contarVocales(palabra) {
  let contador = 0;

  palabra = palabra.toLowerCase();

  for (let i = 0; i < palabra.length; i++) {
    let letra = palabra[i];
    if (
      letra === "a" ||
      letra === "e" ||
      letra === "i" ||
      letra === "o" ||
      letra === "u"
    ) {
      contador++;
    }
  }
  return contador;
}

let palabra = "programacion";
document.write("numero de vocales: " + contarVocales(palabra));
