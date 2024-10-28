/*Escribe un programa que reciba un número entero y sume sus dígitos de manera iterativa hasta que el resultado sea un solo dígito. El programa debe verificar si el número es válido (positivo) y, en caso contrario, devolver un mensaje de error.*/

if (numero <= 0) {
  document.write("introduzca un numero positivo");
}
while (numero >= 10) {
  let suma = 0;

  let numeroStr = numero.toString();

  for (let i = 0; i < numeroStr.length; i++) {
    suma += parseInt(numeroStr[i]);
  }
  numero = suma;
}
