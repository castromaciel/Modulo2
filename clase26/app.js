// JUEGO PIEDRA PAPEL O TIJERA

// FUNCIONES, ARREGLOS, MATH

const options = ['piedra', 'papel', 'tijera']

function playerChoice () {
  
  let choice = parseInt(prompt('Elije una opción: Piedra(0), papel(1), tijera(2)'))
  while ( isNaN(choice) || choice < 0 || choice > 2 ) {

    if ( isNaN(choice) ) {
      choice = parseInt(prompt('Elije una opción: Piedra(0), papel(1), tijera(2)')) 
    } else {
      swal('Número erroneo', '', 'info')
      choice = parseInt(prompt('Elije una opción: Piedra(0), papel(1), tijera(2)'))
    }
  }

  return choice
}

function botChoice () {
  const choice = Math.round( Math.random() * 2 )
  return choice
}

function playGame () {
  const player = playerChoice()
  const bot = botChoice()

  if ( player === bot ) {
    swal('Empate', '', 'warning')
  } else if ( player === 0 && bot === 2 ) {
    swal('Ganaste', '', 'success')
  } else if ( player === 2 && bot === 1 ) {
    swal('Ganaste', '', 'success')
  } else if ( player === 1 && bot === 0 ) {
    swal('Ganaste', '', 'success')
  } else {
    swal('Perdiste', '', 'error')
  }
}

// swal('Hola')
