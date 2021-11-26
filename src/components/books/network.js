const db = require("../../Database/Seeder.json");
module.exports = function (url, bookId, pageId, format) {
	switch (url) {
		case "/books":
			return new Promise((resolve, reject) => {
				const data = db.books;
				if (data) {
					resolve(data);
				}
				reject("Not found");
			});

		case `/book/${bookId}/page/${pageId}/${format}`:
			return new Promise((resolve, reject) => {
				const data = db.books_Content[bookId].pages[pageId].content;

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
					resolve(templateHtml);
				}
				if (format === "txt") {
					resolve(data);
				}
				reject("Not found");
			});

		case `/book/${bookId}`:
			return new Promise((resolve, reject) => {
				const data = db.books_Content[bookId];

				if (data) {
					resolve(data);
				}
				reject("Not found");
			});
		default:
			return new Promise((resolve, reject) => {
				reject("Not found");
			});
	}
};
