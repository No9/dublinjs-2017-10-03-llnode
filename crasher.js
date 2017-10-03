var http = require('http');
var host = "127.0.0.1"
var port = 1338

server = http.createServer(function myRequestListener(req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
  res.not_a_function();
}).listen(port, host, function() {
  http.get(`http://${host}:${port}/`, (res) => {
	console.log('This won\'t print');	
  });
});

console.log(`Server process ${process.pid} running at http://${host}:${port}/`);

