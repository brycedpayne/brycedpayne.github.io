'use strict'

const http = require('http');
const module1 = require('./module1')
const _ = require('lodash')

function onRequest(request, response) {
    response.writeHead(200, {'Content-Type': 'test/plain'});
    response.write(module1.myString);
    module1.myFunction();
    response.end();
}

http.createServer(onRequest).listen(8000);

