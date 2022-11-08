// alumnos[4] = 'Nico'
// console.log(alumnos)


const alumnos = ['Facu', 'Emanuel', 'Nestor', 'Adrian']
// longitud: 4
// Facu, Emanuel, Nestor, Adrian, 
// for(let indice = 0 ; indice < numeros.length ; indice++ ) {
//   console.log(alumnos[indice])
// }

const fruits = ['banana', 'manzana', 'pera']
fruits.push('frutilla')

// console.log(fruits)

const numeros = [1,2,3,4,5,6,7,8,9,10]
const pares = []

for(const numero of numeros) {
  if (numero % 2 === 0) {
    pares.push(numero)
  }
}

// console.log(numeros)
// console.log(pares)

const meses = ['Abril', 'Mayo', 'Junio']
// 0: Abril
// 1: Mayo
// 2: Junio
meses.push('Enero')
// ['Abril', 'Mayo', 'Junio','Enero']
meses.unshift('Enero')
// 0: Enero
// 1: Abril
// ['Enero', 'Abril', 'Mayo', 'Junio','Enero']
meses.shift()
// ['Abril', 'Mayo', 'Junio','Enero']
meses.pop()
// ['Abril', 'Mayo', 'Junio']
console.log(meses)

