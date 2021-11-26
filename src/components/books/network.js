exports.module = function (url, id) {
	switch (url) {
		case "books":
			return new Promise((resolve, reject) => {
				// resolve list of books
			});
			break;
		case `book/${id}`:
			return new Promise((resolve, reject) => {
				// resolve especifi book
			});
			break;

		default:
			break;
	}
};
