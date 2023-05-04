const express = require('express');
const app = express();

const lodash = require('lodash');



var thisIsMe = {
    naam: "cat", 
    leeftijd: 2, 
    profielfoto: new URL("https://i.regiogroei.cloud/fn_checksum,146e0203428cc43b85555570cbc690fd/1104x620/14073f79-f1e6-365c-9ade-df26d8a85832.jpg")
}

var pikachu = {
    naam: "pikachu",
    id: 25,
    weight: 60,
    picture: new URL("https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png")
}

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});


app.get('/whoamijson', (req, res) => {
    res.json(thisIsMe);
});

app.get('/whoami', (req, res) => {
    res.send(`Ik ben ${thisIsMe.naam} en ik ben ${thisIsMe.leeftijd} jaar oud`);
});

app.get('/pikachujson', (req, res) => {
    res.json(pikachu);
});

app.get('/pikachu', (req, res) => {
    res.send(`
    <h1>${pikachu.naam}</h1>
    <h2>id: ${pikachu.id}</h2>
    <h2>weight: ${pikachu.weight}</h2>
    <img src="${pikachu.picture}" alt="pikachu">
    `)
});

app.get('/randomcolor', (req, res) => {
    let randomNumb1 = lodash.random(0, 256);
    let randomNumb2 = lodash.random(0, 256);
    let randomNumb3 = lodash.random(0, 256);
    
    res.send(`<body style="background-color: rgb(${randomNumb1}, ${randomNumb2}, ${randomNumb3});"></body>`)
});


app.listen(3000, err => {
  if (err) {
    console.log('Error starting server')
  } else {
    console.log('Server running on port 3000')
  }
});

