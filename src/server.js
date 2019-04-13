const express = require('express')

// Iniciando a aplicação
const app = express()

// Middleware para o servidor reconhecer requisições em JSON 
app.use(express.json())
// Para permitir o envio de arquivos nas requisições
app.use(express.urlencoded({ extended: true }))

app.use(require('./routes'))

app.listen(3001, () => {
  console.log('Server running on port 3001! Press Ctrl + C to cancel...')
})