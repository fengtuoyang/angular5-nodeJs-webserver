"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var server = http.createServer(function (request, response) {
    response.end("hello node!");
});
server.listen(8888);
