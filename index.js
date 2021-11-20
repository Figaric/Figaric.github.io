import http from "http";

function listener(_, res) {
    res.writeHead(200);
    res.end("Hello World!");
}

const server = http.createServer(listener);

server.listen(8080);