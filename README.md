QRCode
======

A service ready to go on heroku, ables to generate QRCode and read QRCode

It is currently deployed at `http://qrcode42.herokuapp.com`, or you can deploy your own.

## Deploying your own

	$ git clone https://github.com/stumpyfr/QRCode.git
	$ heroku create
	$ heroku config:add BUILDPACK_URL=git://github.com/mojodna/heroku-buildpack-nodejs.git#cairo
	$ git push heroku master
	
## Running locally

	$ npm install
	$ node web.js
	// also supports heroku style invocation using foreman
	$ foreman start
	
## How it works

This is a simple service that takes one value and returns qrcode and reads a qrcode and returns the value

`GET` http://qrcode42.herokuapp.com/test

![test](http://qrcode42.herokuapp.com/test "QRCode for 'Test'")

`POST` http://qrcode42.herokuapp.com/

`curl --form "fileupload=@QRCode.png" http://qrcode42.herokuapp.com`

You will get back the value of the qrcode you posted

## License

The MIT License (MIT)

Copyright (c) 2013 Niels Freier

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.


[![Bitdeli Badge](https://d2weczhvl823v0.cloudfront.net/stumpyfr/qrcode/trend.png)](https://bitdeli.com/free "Bitdeli Badge")

