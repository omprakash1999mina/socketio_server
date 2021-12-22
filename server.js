// const io = require('socket.io')(3000)
console.log('server is rununning at port : 5000')

const io = require('socket.io')(5000, {
  cors: {
    origin: ['http://localhost:3000']
  }
})

io.on('connection', (socket)=>{
    console.log(socket.id)
    // socket.emit('chat-message',)
    socket.on('send-message' , (data, room)=>{
      console.log(data)
      if(room === ''){
        socket.broadcast.emit('receive-message', data)
        // console.log('send')
      }
      else {
        socket.to(room).emit('receive-message', data)
      }

    })
    socket.on('join-room', room =>{
      socket.join(room)
    } )
    // console.log()
})