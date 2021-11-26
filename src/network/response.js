exports.success = function (res, message, status, format) {
	const headers = {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "my-custom-header",
		"Access-Control-Allow-Credentials": true,
	};

	if (format === "html") {
		headers["Content-Type"] = "text/html";
		res.writeHead(status, headers);
		res.write(message);
	} else if (format === "txt") {
		headers["Content-Type"] = "text/plain";
		res.writeHead(status, headers);
		res.write(message);
	} else {
		res.writeHead(status, headers);
		const body = { body: message, error: "" };
		res.write(JSON.stringify(body));
	}

	res.end();
};
exports.error = function (res, message, status, format) {
	const headers = {
		"Content-Type": "application/json",
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Headers": "my-custom-header",
		"Access-Control-Allow-Credentials": true,
	};

	if (format === "html") {
		headers["Content-Type"] = "text/html";
		res.writeHead(status, headers);
		res.write(message);
	} else if (format === "txt") {
		headers["Content-Type"] = "text/plain";
		res.writeHead(status, headers);
		res.write(message);
	} else {
		res.writeHead(status, headers);
		const body = { body: "", error: message };
		res.write(JSON.stringify(body));
	}

	res.end();
};
