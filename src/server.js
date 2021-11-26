const http = require("http");
const Router = require("./router");
const server = http.createServer((req, res) => {
	const { url, method } = req;
	Router(url, method, res);
});

server.listen(3000);
