var http = require('http');
var port = 4343;

var requestHandler = (req, res) => {
	console.log(req.url);
	res.end('Test success');
};

var server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return console.log('something broke', err);
	}
	
	console.log('server listening on', port);
});