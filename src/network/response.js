exports.success = function (res, message, status, format) {
	let contentType = "";

	if (format === "txt") {
		contentType = "text/plain";
	}
	if (format === "html") {
		contentType = "text/html";
	}

	const headers = {
		"Content-Type": contentType,
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "my-custom-header",
		"Access-Control-Allow-Credentials": true,
	};

	const body = { body: message, error: "" };

	res.writeHead(status, headers);
	res.write(message);
	res.end();
};
exports.error = function (res, message, status, format) {
	let contentType = "";

	if (format === "txt") {
		contentType = "text/plain";
	}
	if (format === "html") {
		contentType = "text/html";
	}

	const headers = {
		"Content-Type": contentType,
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "my-custom-header",
		"Access-Control-Allow-Credentials": true,
	};

	const body = { body: "", error: message };

	res.writeHead(status, headers);
	res.write(body);
	res.end();
};
