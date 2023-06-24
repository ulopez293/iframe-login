const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  // Obtén la ruta absoluta del archivo HTML para el segundo servidor
  const filePath = path.join(__dirname, 'page2.html');

  // Lee el archivo HTML
  fs.readFile(filePath, 'utf8', (err, html) => {
    if (err) {
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      res.end('Error interno del servidor');
    } else {
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    }
  });
});

const port = 4000; // Puerto en el que se ejecutará el segundo servidor
server.listen(port, () => {
  console.log(`Servidor 2 en ejecución en http://localhost:${port}`);
});
