const response = require("../utils/response");
const getParams = require("../utils/getParams");
const booksController = require("../controllers/books");

module.exports = function (url, method, res) {
	let [path, bookId, pageId, format] = getParams(url);

	const methods = {
		GET: function () {
			switch (path) {
				case "/books":
					return booksController.getAll();

				case `/books/${bookId}/page/${pageId}/${format}`:
					bookId = Number(bookId)-1
					pageId = Number(pageId)-1
					return booksController.getPage(bookId, pageId, format);

				case `/books/${bookId}`:
					bookId = Number(bookId)-1
					return booksController.getBook(bookId);

				default:
					response.error(res, "Not Found", 404, format);
			}
		},
	};
	if (method in methods) {
		const controller = methods[method];
		controller()
			.then(data => {
				response.success(res, data, 200, format);
			})
			.catch(err => {
				response.error(res, err, 404, format);
			});

		return;
	}

	response.error(res, "That method is not supported yet", 500, format);
};
