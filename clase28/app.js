const alumnos = ['Mauro', 'Cristhian', 'Manu']
console.log(alumnos[0])
// const alumnosConApellido = []

// alumnos.forEach(function(alumno){
//   alumnosConApellido.push(`${alumno} Castro`)
// })

// // console.log(alumnos)
// // console.log(alumnosConApellido)

// const nuevosAlumnos = alumnos.map(function(alumno){
//   return alumno
// })

// const nuevosAlumnosConFlecha = alumnos.map((alumno) => alumno)

// // console.log(nuevosAlumnos)
// // console.log(nuevosAlumnosConFlecha)

// const tortugas = [
//   {
//    nombre:"leonardo",
//    profesion: "ninja",
//    color: "celeste",
//    arma:"espada",
//   },
//   {
//    nombre:"donatelo",
//    profesion: "ninja",
//    color: "violeta",
//    arma:"baston",
//   },
//   {
//    nombre:"miguel angel",
//    profesion: "ninja",
//    color: "naranja",
//    arma:"nunchaco",
//   },
//   {
//    nombre:"rafael",
//    profesion: "ninja",
//    color: "rojo",
//    arma:"sai",
//   },
// ]

// // console.log( tortugas[0].nombre )

// // ['leonardo', 'rafael', '']
// const nombreDeTortugas = tortugas.map( tortuga => tortuga.nombre )
// const colorDeTortugas = tortugas.map( tortuga => tortuga.color)
// console.log(nombreDeTortugas)
// console.log(colorDeTortugas)

// const alumnosDeLaComision = ['Mauro', 'Cristhian', 'Manu', 'Paolo', 'Fede']

// const isAlumn = alumnosDeLaComision.includes('Mauro') // true or false
// const index = alumnosDeLaComision.indexOf('mauro')

// // console.log(index)
// // console.log(isAlumn)

// const existAlumn = alumnosDeLaComision.find((alumno) => (alumno === 'Mauro') || (alumno === 'Manu')) // 
// // console.log(existAlumn)

// const users = ['Maciel', 'Maciel','José', 'Facundo', 'Castro']
// const numeros = [1,2,3,4,5,6,7,8,9,10]

// // devuelve un array con los dos primeros usuarios
// const someUsers = users.filter(item => item === 'Maci')
// const numerosPares = numeros.filter(numero => numero % 2 === 0)


// console.log(numerosPares) // [2,4,6,8,10]


const alumno = {
  edad: 18,
  nombre: 'Maciel',
  domicilio: {
    calle: 'San Juan',
    ciudad: 'San Miguel de Tucumán'
  },
  saludar: function(){
    console.log('Hola')
  }
}
alumno.saludar()

const user = {
  name: 'Maciel',

  presentarse() {
    console.log('Hola, soy Maciel')
  },

  dormir() {
    console.log('zzzZZZ')
  }

}

console.log(user['name'])

user.presentarse()
user.dormir()

const numero = '12'
const nuevoNumero = Number(numero)
const numeroPi = '3.141516....'
const pi = Math.PI

const date = new Date()

console.log(date)
console.log(Math.random())

class Persona {

  constructor(nombre, apellido, edad) {
    this.nombre = nombre
    this.apellido = apellido
    this.edad = edad
  }

  dormir() {
    console.log('zzzz')
  }

  gritar() {
    console.log('aaaaaaaaaaaaaaaaaa')
  }

  presentarse() {
    console.log(`Hola soy ${this.nombre} y tengo ${this.edad} años`)
  }

}

const alumno1 = new Persona('Paolo', 'Posse', 35)
const alumno2 = new Persona('Adrian', 'Lescano', 34)

alumno1.presentarse()
alumno2.presentarse()


class Auto {

  constructor(marca, modelo, precio, color = 'Negro', rodado) {
    this.marca = marca
    this.modelo = modelo
    this.precio = precio
    this.color = color 
  }
  

  encender() {
    
    if (this.marca === 'Renault'){
      console.log('Encendido')
    } else {
      console.log(`Falla al encender el auto ${this.marca}`)
    }

  }

  get marcaYModelo() {
    return `${this.marca} ${this.modelo}`
  }

  acelerar() {
    console.log('Acelerandoooooo')
  }

  frenar() {
    console.log('Frenando...')
  }

}

const auto1 = new Auto('Volkswagen', 'Bora', 120000)
const auto2 = new Auto('Renault', '12', 30000, 'Rojo', '')

// console.log(auto1.rodado)

// auto1.rodado = '16'
// console.log(auto1)
// console.log(auto2)

// console.log( auto1.marcaYModelo )

// auto1.encender()
// auto2.encender()

/* {
  marca: ...,
  modelo: ...,
  .....
} */

