/* 
Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

// alert
// prompt

*/


// if (nota >= 0 && nota <= 10) {
//   alert(nota)
// }
// else {
//   alert('Ingrese una nota entre (0-10)')
// }

// 
// nota = -1

let nota = parseInt(prompt('Ingrese una nota (0-10)'));

// isNaN
// is Not a Number

do {

  if(nota > 10 || nota < 0){
    nota = parseInt(prompt('Ingrese un número válido'));
  }

  if (nota === 0 || nota === 1 || nota === 2) {
    
    alert('Muy deficiente')

  } else if (nota === 3 || nota === 4) {

    alert('Insuficiente')

  } else if (nota === 5 || nota === 6) {
    alert('Suficiente')
  } else if(nota === 7) {
    alert('Bien')
  } else if (nota === 8 || nota ===9){
    alert('Notable')
  } else if (nota === 10) {
    alert('Sobresaliente')
  }

} while (nota > 10 || nota < 0)

// Finaliza el flujo...

// const edad = parseInt(prompt('Ingrese edad 1'))
// const edad2 = parseInt(prompt('Ingrese edad 2'))
// const edad3 = parseInt(prompt('Ingrese edad 3'))

// alert(`El mayor de las edades es ${Math.max(edad, edad2, edad3)}`)
