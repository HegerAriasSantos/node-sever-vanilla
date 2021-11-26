const URL = require("url");
module.exports = function (url) {
	const urlParts = URL.parse(url, true);
	const params = urlParts.path.substring(7, urlParts.path.length);
	return params.substring(0, params.indexOf("/"));
};
