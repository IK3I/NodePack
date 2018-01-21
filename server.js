//sets the various configs and opens server

var server = require('./lib/serverDef');
var port = 4343;

server.listen(port, (err) => {
	if (err) {
		return console.log('something broke', err);
	}
	
	console.log('server listening on', port);
});

// Exposes server for testings and scripts