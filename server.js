const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/client.html');
});

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });


  /*socket.on('nick', (nombre) => {
   
    io.emit('nick', nombre);
    
    socket.on('mensajeDesdeServidor', (msg) => {
      console.log(msg.nombre +":"+ msg.texto);
      io.emit('mensajeDesdeServidor', msg);
    });
  });*/
  socket.on('mensajeDesdeServidor', (msg) => {
    console.log(msg.nombre +":"+ msg.texto);
    io.emit('mensajeDesdeServidor', msg);
  });


});

http.listen(3000, () => {
  console.log('listening on *:3000');
  
});