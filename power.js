const express = require('express')
const app = express()
const port = 3000
const httpServer = require("http").createServer();
const io = require('socket.io')(httpServer)

io.on('connection', socket => {
  // console.log('Some client connected')

  socket.on('chat__form', message => {
    console.log('From client: ', message)
  })
})

app.use(express.static('public'))

app.listen(port, () => {
  console.log('Example app listening at http://localhost:${port}')
})