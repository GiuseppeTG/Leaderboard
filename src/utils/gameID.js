fetch(`${apiUrl}/games/`, {
  method: 'POST',
  body: JSON.stringify({
    name: 'Space Hecatomb',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));