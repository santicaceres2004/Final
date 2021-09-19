const express = require('express');
const fetch = require('node-fetch');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/ping', function (req, res) {
  // los query params llegan cuando invocan la ruta asi /ping?name=Juan&lastName=Perez
  const fullName = req.query.name + ' ' + req.query.lastName;
  res.send('pong, fullName is ' + fullName);
});

app.get('/', function (req, res) {
  res.send('Hola Mundo');
});

app.get('/banner', function (req, res) {

  res.send("<div> <h1> Este es el Banner </h1> </div>");
});

app.get('/user/:userId', async function (req, res) {
  const userId = req.params.userId;

  const fetchResponse = await fetch(`https://api.github.com/users/${userId}`);  
  const response = await fetchResponse.json();
  res.send("Llamaron con userId: " + JSON.stringify(response));

  // Lo mismo de arriba resuelto con Async Await, lo podemos hacer con Promesas y then aca abajo
  // fetch(`https://api.github.com/users/${req.params.githubName}`)
  //   .then((response) => {
  //     return response.json();
  //   })
  //   .then((response) => {
  //     res.send("El usuario de github es: " + JSON.stringify(response));
  //   })

})

app.listen(PORT, function () {
  console.log('El servidor quedo corriendo en el puerto ' + PORT);
});