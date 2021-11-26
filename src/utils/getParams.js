const URL = require("url");
module.exports = function (url) {
	const urlParts = URL.parse(url, true);

	const path = urlParts.path;
	let indexBook = path.substring(7, path.length);
	let indexpage = "";
	let format = "";
	if (path.search("t") !== -1) {
		format = path.substring(path.lastIndexOf("/") + 1, path.length);
		indexpage = path.substring(
			path.indexOf("p") + 5,
			path.indexOf("/", path.indexOf("p") + 5),
		);
		indexBook = path.substring(7, path.indexOf("/", 7));
	}
	return [path, indexBook, indexpage , format];
};
