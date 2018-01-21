//defines server properties

var http = require('http');

var requestHandler = (req, res) => {
	console.log(req.url);
	res.end('Test success');
};

var server = http.createServer(requestHandler);

server.close = function () {
	console.log('shutting down server');
	process.exit();
}

module.exports = server;