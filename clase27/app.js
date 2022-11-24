// // const arr = ['🥩','🥓','🥗']
// // const meat = arr.filter(item => item !== '🥗')

// // console.log(meat) // ['🥩','🥓']

// // const arr = [1, 10, 100, 2, 200, false]

// // console.log(arr.indexOf(100)) // 2
// // console.log(arr.indexOf(false)) // 5
// // console.log(arr.indexOf('People')) // -1

// // console.log(arr.includes(1)) // true
// // console.log(arr.includes('1')) // false

// // const arr = ['🍎','🍉','🍋']
// // const apple = arr.find(item => item === '🍎')
// // console.log( apple )

// let users = ['Maciel', 'Maciel','José', 'Facundo', 'Castro']

// // devuelve un array con los dos primeros usuarios
// let someUsers = users.filter(item => item === 'Maciel');

// console.log(someUsers.length); // 2

const alumno = {
  // llave, clave, key:
  nombre: "Ema",
  apellido: "Benitez",
  edad: 20,
}

const auto = {
  marca: 'Renault',
  modelo: '12',
  color: 'azul',
  precio: 30000,
  fechaDeLanzamiento: {
    dia: 12,
    mes: 'Mayo',
    anio: 1971,
  }
}

// const keys = Object.keys(auto)
// ['marca', 'modelo', 'color', 'precio', 'fechaDeLanzamiento']
// for(const element of keys) {
//   console.log(element)
//   console.log(auto[element])
// }

// for (const key in auto) {

//   console.log(auto[key])

// }


// auto.precio = 29999
// auto.cantidadDePuertas = 5

// console.log(auto)

// formas de llamar a una propiedad del objeto

// const mentor = 'Maciel'

// console.log(auto['fechaDeLanzamiento']['anio'])
// console.log(auto.fechaDeLanzamiento.anio)

// console.log(auto.color)

// console.log(`El precio de mi auto ${auto.marca} ${auto.modelo} es de ${auto.precio} USD`)

// console.log('Precio: ', auto.precio)
// console.log(`Precio: ${auto.precio}`)

// console.log(alumno)
// console.log(alumno.nombre)


const tortugas = [
  {
   nombre:"leonardo",
   profesion: "ninja",
   color: "celeste",
   arma:"espada",
  },
  {
   nombre:"donatelo",
   profesion: "ninja",
   color: "violeta",
   arma:"baston",
  },
  {
   nombre:"miguel angel",
   profesion: "ninja",
   color: "naranja",
   arma:"nunchaco",
  },
  {
   nombre:"rafael",
   profesion: "ninja",
   color: "rojo",
   arma:"sai",
  },
]

tortugas.forEach(function(tortuga, index, array){
  console.log(tortuga) // {nombre: "leonardo"....}
  console.log(index)   // 0
  console.log(array)  // [{...},{...}]
})



// tortugas.forEach(tortuga => console.log(tortuga))


// for(const element of tortugas) {
//   console.log(`Nombre: ${element.nombre}`)
// }


// const resta = function (a,b) {
//   return a-b
// }

// const resta = (a, b) => a - b

// function suma (a,b) {
//   return a+b
// }

// console.log( resta(5,2) )

// const triple = numero => numero * 3

// const cuadruple = (numero) => {
//   const resultado = numero * 4

//   return resultado
// }

// function double (numero) {
//   return numero * 2
// }



// console.log(cuadruple(2))
// console.log( double(9) )
// console.log( triple(9) )




