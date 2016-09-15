var http = require('http'); // http module

http.createServer(function (req, res) {
	res.end('Hello, world!');
});
