// const users =[
//   {
//     name: 'John Doe',
//     email: 'john@doe.com',
//   },
//   {
//     name: 'John Doe',
//     email: 'john@doe.com',
//   }
// ]

// const user = {
//   name: 'John Doe',
//   email: 'john@doe.com',
// }

const movies = [
  {
    name: 'El conjuro',
  },
  {
    name: 'El señor de los anillos',
  },
]


// localStorage.setItem('movies', JSON.stringify(movies))
// localStorage.setItem('user', JSON.stringify(user))

// const newUser = JSON.parse(localStorage.getItem('user'))

// const newMovies = JSON.parse(localStorage.getItem('movies'))
// newMovies.push({name: 'Matrix'})

// localStorage.setItem('movies', JSON.stringify(newMovies))

// console.log('Antes de limpiar el localStorage')
// console.log(localStorage.length)
// console.log(localStorage.getItem('movies'))

// function clearLoaclStorage() {

// }

// console.log('Despues de limpiar el localStorage')
// console.log(localStorage.length)
// console.log(localStorage.getItem('movies'))

// localStorage.setItem('movies', JSON.stringify(movies))

// if (!localStorage.getItem('user')) {

//   localStorage.setItem('user', 'Maciel')
//   alert(`El usuario ${localStorage.getItem('user')} ha sido creado!`)

// } else {
//   alert(`Hola ${localStorage.getItem('user')}`)
// }
const validate = () => {
  const div = document.getElementById('id1')

  let pass = document.getElementById("password").value;
  if (pass.match(/^[A-Z](?=\w*\d)(?=\w*[a-z])\S{8,16}/)) {

    alert("Genio!");

  } else {

    const myError = document.createElement("p").innerHTML = `Ha ocurrido un error`
    div.appendChild(myError)

  }
};
const validateEmail = () => {
  let email = document.getElementById("email").value;

  if (email.match(/([a-z]\w+@[a-z]+\.[a-z]{2,5})/)) {
    alert("Correo correcto");
  } else {
    alert("No cumple el formato de correo");
  }
};

// Deberia crear un nuevo usuario.
// Deberia agregar un objeto a un ARREGLO DE USUARIOS EXISTENTE 

function registerSubmit () {

  const email = document.getElementById('email')
  const password = document.getElementById('password')

  const user = {
    email: email.value,
    password: password.value,
  }

  const users = JSON.parse(localStorage.getItem('users')) || []
  console.log(users)
  // TODO: preguntar si el email existe en el arreglo de usuarios. Si existe no lo agrego. caso contrario deberia agregarlo...
  users.push(user)
  // ................


  localStorage.setItem('users', JSON.stringify(users))

}
