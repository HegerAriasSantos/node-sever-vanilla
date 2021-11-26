const booksModel = require("../models/books");
function getAll() {
	return new Promise((resolve, reject) => {
		const data = booksModel.getAll();
		if (data) resolve(data);
		reject("Not Found");
	});
}

function getPage(bookId, pageId, format) {
	return new Promise((resolve, reject) => {
		
		const data = booksModel.getPage(bookId, pageId);
		if (format === "html") {
			const templateHtml = `
<!doctype html>
<html>
<head>
		<title>Response!</title>
</head>
<body>
		<p>${data}</p>
</body>
</html>`;
			if (!data) {
				reject(`
<!doctype html>
<html>
<head>
		<title>Response!</title>
</head>
<body>
		<p> Not Found</p>
</body>
</html>`);
			}
			resolve(templateHtml);
		}
		if (format === "txt") {
			resolve(data);
		}
		reject("Not Found");
	});
}

async function getBook(bookId) {
	return new Promise((resolve, reject) => {
		const data = booksModel.getBook(bookId);
		if (data) resolve(data);
		reject("Not Found");
	});
}

module.exports = {
	getAll,
	getPage,
	getBook,
};
