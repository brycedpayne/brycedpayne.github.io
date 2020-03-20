var http = require('http');
const react = require('react')

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'test/plain'});
    response.write('Hello World');
    response.end();
}
node server.json();
http.createServer(onRequest).listen(8000);