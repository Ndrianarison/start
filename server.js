const http = require('http');

const server = http.createServer((request, response)=> {
    response.end('Resultat');
});

server.listen(process.env.PORT|| 3050 );