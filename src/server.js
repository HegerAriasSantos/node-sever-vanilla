const http = require("http");
const get = require("./components/books/network");
const response = require("./network/response");
const getId = require("./utils/getId");

const server = http.createServer((req, res) => {
	const { url, method } = req;
	const Id = getId(url);

	switch (method) {
		case "GET":
			response.success(res, "algo", 200, "txt");
			break;

		default:
			response.error(req, res, "That method is not supported yet", 500, "txt");
			break;
	}
});

server.listen(3000);
