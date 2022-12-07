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


class Producto {

  constructor (nombre, precio) {
    this.nombre = nombre
    this.precio = precio
  }


  set actualizarPrecio(precioNuevo) {
    this.precio = precioNuevo
  }

  get precioFormateado() {
    return this.precio.toFixed(2)
  }

}


const producto1 = new Producto('Axe', 400)

console.log(producto1)
// producto1.precio = 600
producto1.actualizarPrecio = 600

console.log(producto1.precioFormateado)
console.log(producto1.precio)


class Cuadrado {

  constructor(lado){
    this.lado = lado
  }

  set cambiarLado(nuevoLado){
    this.lado = nuevoLado
  }

  get area(){
    return this.lado * this.lado
  }

}

const cuadradito = new Cuadrado(5)

console.log(cuadradito)
console.log(cuadradito.area)

cuadradito.cambiarLado = 12 

console.log(cuadradito)
console.log(cuadradito.area)


// BOM


const browser = navigator.userAgent;
console.log(window.location.href)

const repeticion = window.setInterval( () => {
  console.log('Holas')
}, 1000)

window.setTimeout(() => {
  console.log('Pasaron 5 segundos')
}, 5000)

