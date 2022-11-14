
const arr = ['Comisión', 26, 'i', ['Mentor', 'Maciel']]
// console.log(arr[3][1])
const mentor = arr[3]
// console.log(mentor[1])

// Posicion:
// Indice:
const estudio = ['Yo', 'estudio', 'javascript', 'ahora', 'mismo']
const metodoSlice = estudio.splice()
/*
  // ['Yo', 'estudio', 'javascript', 'con', 'la', 'comision', '26', 'ahora', 'mismo']
  cambia la long del arreglo
  Se agregan los elementos comision y maciel al inicio
*/

estudio.splice(0, 0)

estudio.splice(3, 'con', 'la','comision', '26')
// console.log(metodoSlice)
// console.log(estudio)

/*
  9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
  Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
*/

// const frase = prompt('Ingrese una frase')
// Hola
// a , e ,i ,o, u

// const vocales = 'aeiou'
// // HOLA COMO ESTAS
// for(const letra of frase) {

//   for(const vocal of vocales) {

//     if(letra === vocal) console.log(letra)

//   }

// }

// for (let i = 0; i < frase.length ; i++){

//   for (let j = 0; j < vocales.length; j++) {

//     if(frase.charAt(i) === vocales.charAt(j)) console.log(frase.charAt(i))
//   }

// }

/*
  Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.
*/ 

const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
let html = `<ul>`

for(const mes of meses) {
  html += `<li class="color">${mes}</li>`
}

document.write(`${html}</ul>`)
