const express = require('express')
const cors = require('cors')
const app = express()
const port = 3000

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/vamostomarcafe', (req, res) => {
  res.send('Vamos todos tomar café durante 15 minutos!')
})

app.get('/ola2', (req, res) => {
  res.send('<html><body><h1>olá</h1><h2>ecgm</h2></body>')
})

app.get('/euro', (req, res) => {
    let chave = gerachave(5, 2);
    console.log(chave);
    res.json(chave);
})

function gerachave(n, e) {
    let chave = {
        numeros: [],
        estrelas : []
    }
    chave.numeros = gerador(n, 50);
    chave.estrelas = gerador(e, 12);
    return chave
}

function gerador(k, max) {
    let extracao = []
    while (extracao.length < k) {
        novo = Math.floor(Math.random() * max) + 1;
        if (!extracao.includes(novo)) {
            extracao.push(novo)
        }
    }
    return extracao
}
    
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})




