const gameSection = document.getElementById('GamesSection')
// let games = ''
// fetch('http://localhost:3000/juegos')
//   .then(response => response.json())
//   .then(data => {

//     data.forEach( (item) => {
//       games += `
//         <div class="card" style="width: 18rem;">
//           <img src=${item.url} class="card-img-top" alt=${item.title}>
//           <div class="card-body">
//             <h5 class="card-title">${item.title}</h5>
//             <p class="card-text">${item.description}</p>
//           </div>
//         </div>
//       `
//     })
//     gameSection.innerHTML = games
//   })

let tableBody = document.getElementById('TableAdminBody')

fetch('http://localhost:3000/juegos')
  .then(response => response.json())
  .then(data => {
    
    
    data.forEach( (item) => {
      
      let gameRow = document.createElement('tr');

      gameRow.scope = 'row'
      gameRow.innerHTML = `
        <td class='text-bold'>${item.id}</td>
        <td class='text-bold'>${item.title}</td>  
        <td class='text-bold'>${item.date}</td>
        <td class='text-bold'>
          <i id='${item.id}' class ="bi bi-trash" onclick="deleteGame(this)"></i>
        </td>
      `

      tableBody.appendChild(gameRow)
    });

  });

function deleteGame(element) {

  const isDelete = confirm('Estas seguro que deseas eleminar el elemento?')

  if (isDelete){
    fetch(`http://localhost:3000/juegos/${element.id}`, {
      method: 'DELETE'
    })
    .then(response => response.json())
    .then( () => { window.location.reload() })
  }
  
}
