const http = require("http");
const get = require("./components/books/network");
const response = require("./network/response");
const getParams = require("./utils/getParams");
const server = http.createServer((req, res) => {
	const { url, method } = req;
	const [path, bookId, pageId, format] = getParams(url);
	console.log(bookId, pageId, format);
	console.log(format);
	switch (method) {
		case "GET":
			get(path, bookId, pageId, format)
				.then(data => {
					response.success(res, data, 200, format);
				})
				.catch(err => {
					response.error(res, err, 404, format);
				});

			break;

		default:
			response.error(res, "That method is not supported yet", 500, "txt");
			break;
	}
});

server.listen(3000);
