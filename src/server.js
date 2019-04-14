const express = require('express')
const mongoose = require('mongoose')
const path = require('path')
const cors = require('cors')

// Iniciando a aplicação
const app = express()
app.use(cors())

// Para a aplicação "ouvir" tanto protocolo http quanto web socket
const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', socket => {
  socket.on('connectRoom', box => {
    socket.join(box)
  })
})

mongoose.connect('mongodb+srv://useratlas:useratlas@cluster0-ps0lx.mongodb.net/personaldrive?retryWrites=true',
  {
    useNewUrlParser: true,
  }
)

app.use((req, res, next) => {
  req.io = io

  return next()
})
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')))

app.use(require('./routes'))

server.listen(process.env.PORT || 3001, () => {
  console.log('Server running on port 3001! Press Ctrl + C to cancel...')
})