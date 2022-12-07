// BOM
// El objeto window.

console.log(window.location)

// setTimeout
// setInterval

/* setTimeout( () => {
  window.location.reload()
}, 5000 ) */



const repetition = window.setInterval(() => {

  // console.log(`${new Date().getHours()} : ${new Date().getMinutes()} : ${new Date().getSeconds()}`)
}, 1000)

// DOM
// El objeto document.

// console.log( document.getElementById('minutes').innerHTML = 'Texto de minutos' )
// console.log( document.getElementsByTagName('p')[0].innerHTML = 'Texto de horas' )
// document.write('Hola')
// document.myParagraph.innerHTML = `Sobrescribiendo el body`

let myParagraph = document.createElement('p')
myParagraph.id = 'firstChild'
myParagraph.innerText = 'Soy un nuevo parrafo'
myParagraph.style.backgroundColor = 'red'
myParagraph.style.padding = '16px'

myParagraph.innerHTML = `<p class="className">Hola</p>`

document.getElementById('minutes').appendChild(myParagraph)

const pHours = document.getElementById('hours')
document.body.removeChild(pHours)

const className = document.getElementsByClassName('className')[0]
console.log(className)

document.myParagraph.removeChild(className)