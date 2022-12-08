// Respuesta de un servidor
const data = [
  {
    image: "https://picsum.photos/200/300?random=1",
    title: "First Title",
    price: 200.00,
    description: "Lorem ipsum dolor sit"
  },
  {
    image: "https://picsum.photos/200/300?random=2",
    title: "Second Title",
    price: 30340.00,
    description: "Lorem ipsum dolor sit Lorem ipsum dolor sit"
  },
  {
    image: "https://picsum.photos/200/300?random=3",
    title: "Third Title",
    price: 13000.00,
    description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit"
  },
  {
    image: "https://picsum.photos/200/300?random=4",
    title: "Fourth Title",
    price: 10.00,
    description: "Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit Lorem ipsum dolor sit"
  },
]

const data2 = {
  "id": 1,
  "title": "Ciberpunk 2077",
  "url": "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg?t=1662623886",
  "description": "Cyberpunk 2077 es un RPG de aventura y acción de mundo abierto ambientado en el futuro sombrío de Night City, una peligrosa megalópolis obsesionada con el poder, el glamur y las incesantes modificaciones corporales.",
  "date": "9 DIC 2020",
  "developer": "CD PROJEKT RED",
  "editor": "CD PROJEKT RED",
  "tags": "Ciberpunk",
  "multiplayer": false
}

console.log(data[0])

// convertimos el objeto a string
const jsonData = JSON.stringify(data)
console.log(jsonData)


// deserializar el string y lo convertimos a objeto
const newData = JSON.parse(jsonData)



console.log(newData[0].tilte)


const products = document.getElementById('products')
products.innerHTML = ''
data.forEach((item) => {
  products.innerHTML += `
  <div class="card" style="width: 18rem;">
    <img src="${item.image}" class="card-img-top" alt="...">
    <div class="card-body">
      <p class="card-text">${item.description}</p>
      <p class="card-text">$${item.price}</p>
    </div>
  </div>
  `
})

const darAltaUsuario = () => {
  enviarDatos()
  calcularDatos()
  refrescarPantalla()
}

let secondaryButton = document.getElementById('SecondButton')

secondaryButton.addEventListener('click', enviarDatos, false)
secondaryButton.addEventListener('click', calcularDatos, false)
secondaryButton.addEventListener('click', refrescarPantalla, false)

secondaryButton.removeEventListener('click', refrescarPantalla)

function enviarDatos() {
  console.log('Enviando')
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
}

function calcularDatos() {
  console.log('Calculando...')
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  // 
  
}

function refrescarPantalla (){
  console.log('Recargando...')

}