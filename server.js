const http = require('http');
const fs = require('fs');
// const socketio = require('socket.io');

const server = http.createServer((req, res) => {
  if (req.url === '/index.html') {
    fs.readFile('./public/index.html', 'utf8', (error, data) => {
      if (error) {
        res.writeHead(500);
        res.end(`Erro carregando index.html: ${error}`);
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
  } else {
    res.writeHead(404);
    res.end(`Arquivo não encontrado: ${req.url}`);
  }
});

/* const io = socketio(server);

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
}); */

server.listen(8080, () => {
  console.log('Servidor iniciado na porta 8080, Acesse pelo URL: localhost:8080/index.html');
});



