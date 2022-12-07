const showHour = () => {

  const today = new Date()

  let hours = document.getElementById('hours')
  let minutes = document.getElementById('minutes')
  let seconds = document.getElementById('seconds')
  let day = document.getElementById('day')
  const daysOfWeek = ['Domingo', 'Lunes', 'Martes']

  hours.innerText = `${today.getHours()}`
  minutes.innerText = `${today.getMinutes()}`

  if ( today.getSeconds() < 10 ) {
    seconds.innerText = `0${today.getSeconds()}`
  } else {
    seconds.innerText = `${today.getSeconds()}`
  }

  day.innerText = daysOfWeek[today.getDay()]

}


setInterval(showHour, 1000)