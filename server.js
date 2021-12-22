// const io = require('socket.io')(3000)

const io = require('socket.io')(process.env.PORT || 5000, {
  cors: {
    origin: [ 'https://socketio-server-opdevelopers.herokuapp.com','http://localhost:3000']
  }
})
console.log(`server is rununning at port : ${process.env.PORT}`)

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
