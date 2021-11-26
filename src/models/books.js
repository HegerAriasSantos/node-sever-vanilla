const db = require("../Database/Seeder.json");

function getAll() {
	const data = db.books;
	return data;
}

function getPage(bookId, pageId) {
	const data = db.books_Content[bookId]?.pages[pageId]?.content;

	return data;
}

function getBook(bookId) {
	const data = db.books_Content[bookId];

	return data;
}

module.exports = {
	getAll,
	getPage,
	getBook,
};
