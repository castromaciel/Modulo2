// 6- Realiza un script que escriba una pirámide del 1 al 30 de la siguiente forma :

// 1
// 22
// 333
// 4444
// 55555
// 666666
// …….

// let hastaQueNumero = parseInt(prompt('Ingrese un numero '))

// for ( let contador = 1; contador <= hastaQueNumero ; contador++ ) {

//   // contador  = 2
//   for ( let indice = 0; indice < contador ;indice ++ ) {
//     document.write(`${contador}`)
//   }
  
//   document.write(`<br>`)
// }

// let nombre = prompt('Ingrese su nombre')
// if (nombre === null) {
//   nombre = undefined
// // }

function saludar( nombre = 'Usuario sin nombre' ){
  console.log(`buenas noches ${nombre}`)
}

// MM/DD/AAAA
// 11/14/2022
// 11/19/2022

const date = new Date('11/19/2022').getDay()

const days = ['Lunes', 'Martes']

function isWeekend(day) {
  return (day === 0 || day === 6)
}

// retorna el día
// mostrar una imagen dependiendo el día

function printImage (isWeekend) {
  
  if ( isWeekend ) {
    document.write(`<img src="./images/Vierness.jfif" alt="Es Finde">`)
  } else {
    document.write(`<img src="./images/Lunes.jfif" alt="No es Finde">`)
  }
}

printImage( isWeekend(date) )
