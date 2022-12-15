const edad = 18;

fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST',
  body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
    author: 'Maciel',
    age: 22,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));


fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'GET',
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  }
})
  .then(response => response.json())
  .then(data => console.log(data));
