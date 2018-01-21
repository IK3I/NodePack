var server = require('../lib/serverDef');
var assert = require('assert');
var http = require('http');

// start up server for testing and shut it down when done
describe('server', function () {
	before(function () {
		server.listen(8000);
	});
	
	after(function () {
		server.close();
	});
	
// actual tests

	it('should be listening', function (done) {
		assert.equal(true, server.listening);
		done();
	});
	
	it('should return 200', function (done) {
		http.get('http://localhost:8000', function (res) {
			assert.equal(200, res.statusCode);
			done();
		});
	});
	
	it('should say "Test success"', function (done) {
		http.get('http://localhost:8000', function (res) {
			var data = '';
			
			res.on('data', function (chunk) {
				data += chunk;
			});
			
			res.on('end', function () {
				assert.equal(200, res.statusCode);
				done();
			});
		});
	});
});