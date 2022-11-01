//2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).

document.write('Hello World')
console.log('Hello World')
console.warn('Hello World')
console.error('Hello World')

// 

const user = prompt("Ingrese su usuario")
document.write('Hola ', user) // 'Hola Maciel'

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.

const numero1 = parseInt( prompt("Ingrese un numero") )
const numero2 = parseInt( prompt('Ingrese otro numero') )

//Imprimir la suma en pantalla... 
//

// Estructura condicionales
const valor = 1234
const valorString = '1234'


if( valor === valorString ) {
  
  console.log('Son iguales en tipo y valor')

} else {

  console.log('No son iguales ni en tipo, ni en valor')

}

const edad = parseInt(prompt('Ingresa tu edad para pasar al boliche'))

// Si tenes 18 pasa tranquilo
// si tenes 24 o más, tenes promociones

if (edad >= 18) {
  alert('Sos mayor de edad, pasa tranqui')
  if (edad >=24) {
    alert('Tenes promociones')
  }
} else {
  alert('No sos mayor, anda a la casa')
}


if ( (edad >= 16) && (edad < 18) ) {
  alert('Tenes permiso hasta las 00')
} else if ( (edad >= 18) && (edad < 24) ) {
  alert('Tenes permiso hasta que te corran')
} else if ( edad >= 24 ) {
  alert('Tenes permiso y promociones')
} else {
  alert('Anda a bañarte, no tenes permiso..')
}

// 8.- Escribe un programa que pida un número y diga si es divisible por 2

const numero = parseInt( prompt('Ingrese un numero') )

// Resto de la division es = 0

if (numero % 2 === 0) {
  alert('Es un numero par')
} else {
  alert('NO es un numero par')
}