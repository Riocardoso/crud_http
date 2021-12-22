const express = require("express");
const app  = express();
app.use(express.json());
const dados = ["cripto = bitcoin", "criptográfico = BTC", "crytpo = 265457", "criptográfica = BRL"]



app.get('/users', (request, response)=>{

    return response.json(dados)
})

module.exports = app

