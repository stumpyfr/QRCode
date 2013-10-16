var fs = require('fs');
var crypto = require('crypto');
var qrdecoder = require('node-zxing')({ZXingLocation: './'});
var QRCode = require('qrcode');
var TOTP = require('onceler').TOTP;

var port = process.env.PORT || 2121;
var express = require('express');
var app = express();
var server = require('http').createServer(app, { log: false });
app.use(express.bodyParser());
app.use(express.compress());
//app.use(express.static(__dirname + '/public'));

app.post('/', function(req, res) {
	if (req.files != null) {
	    var file = req.files[Object.keys(req.files)[0]];
	    qrdecoder.decode(file.path, function (err, out) {
		if (err) {
		    res.send(err);
		} else {
		    res.send(out);
		}
	    });
	} else
	    res.send({error: 'you need to send a png file'});
    });

app.get('/:value', function (req, res) {
	if (req.params.value != null) {
	    QRCode.toDataURL(req.params.value, function(err,url){
		    if (err)
			res.send(err);
		    else {
			var base64Data = url.replace(/^data:image\/png;base64,/,'');
			var hash = crypto.createHash('md5').update(req.params.value).digest("hex");
			fs.writeFile('./' + hash + '.png', base64Data, 'base64', function(err) {
				if (err)
			    	    res.send(err);
				else {
			      	    fs.readFile('./' + hash + '.png', function (err, img) {
				   	    res.writeHead(200, {'Content-Type': 'image/png' });
					    res.end(img, 'binary');
					});
				}
			    });
		    }
		});
	}
    });
		
app.get('/', function(req, res) {
	res.send('[GET] '+ req.header('host') + '/:value -> you will get a temporary qrcode (don\'t link directly, make a copy ;)) <br /> [POST] to \'/\' your picture and you will receive the qrcode value');
    });

server.listen(port);
