var http = require('http');
var module1 = require('./module1')

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'test/plain'});
    response.write(module1.myString);
    module1.myFunction();
    response.end();
}

http.createServer(onRequestlisten(8000);

