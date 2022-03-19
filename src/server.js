const http = require("http");
const Router = require("./router");
const port = 4020;
const server = http.createServer((req, res) => {
	Router(req.url, req.method, res);
});

server.listen(port);
console.log("The server is listen on port: " + port)
