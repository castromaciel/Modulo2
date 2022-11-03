
// const mes = prompt('Ingrese un mes')
const mes = ''
// Key es la expresión o la variable a comparar
switch (mes.toLowerCase()) {
  
  //Primera condicion
  case 'enero':
    // Ejecuto un bloque de código.
    console.log('Es el primer mes del año.')
    break

  case 'febrero':
    // Ejecutar el bloque de código.
    console.log('Es el segundo mes del año')
    break

  case 'marzo':
    // Ejecutar el bloque de código.
    console.log('Es el tercer mes del año')
    break

  case 'abril':
    // Ejecutar el bloque de código.
    console.log('Es el cuarto mes del año')
    break

  default:
    console.log('No coincide con un mes')
    break
}

let contador = 10
while (contador <= 10) {
  // Ejecutamos el bloque de código
  if (contador % 3 === 0) {
    // alt + 96 = ``
    // altGr + ] = ``
    console.log(`El número ${contador} es divisible por 3`)
  }
  contador++
}

let nombre; 
console.log(nombre)
// do {
//   nombre = prompt('Ingresa tu nombre para continuar')
// } while (!nombre);


// Iterar entre numeros del 1 al 100 y para los números que son múltiplos de 3, imprimir la palabra Fizz
// para los numeros que son multiplos de 5, imprimir la palabra Buzz
// para los numeros que son multiplos de 3 y de 5, imprimir la palabra FizzBuzz


for(let contador = 0; contador < 10; contador++) {

  if(contador % 2 === 0) { 
    console.log(`${contador} es un número par`)
  }
}
