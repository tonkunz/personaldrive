const express = require('express')
const mongoose = require('mongoose')
const path = require('path')

// Iniciando a aplicação
const app = express()

mongoose.connect('mongodb+srv://useratlas:useratlas@cluster0-ps0lx.mongodb.net/personaldrive?retryWrites=true',
  {
    useNewUrlParser: true,
  }
)

// Middleware para o servidor reconhecer requisições em JSON 
app.use(express.json())
// Para permitir o envio de arquivos nas requisições
app.use(express.urlencoded({ extended: true }))
// Para exibir os arquivos
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require('./routes'))

app.listen(3001, () => {
  console.log('Server running on port 3001! Press Ctrl + C to cancel...')
})