import * as http from 'http';

const server = http.createServer((request, response) => {
    response.end("hello node!");
});

server.listen(8888);
