var request = require('supertest');
request = request('http://qrcode42.herokuapp.com');

describe('Test', function() {
	it('if service is up', function(done) {
		request.get('/').expect(200, done);
	    });
	it('return qrCode', function(done) {
		request.get('/test')
		    .expect('Content-Type', 'image/png')
		    .expect(200, done);
	    });
	it('return value', function(done) {
		this.timeout(15000);
		request.post('/')
		    .attach('qrcode', 'test/test.png')
		    .expect(200, 'test', done);
	    });
    });