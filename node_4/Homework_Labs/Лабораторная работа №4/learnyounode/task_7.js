const fs = require('fs');
const path = require('path');
const http = require('http');

http.get(process.argv[2],function (response){

	response.on('data', function (data) {
		//response.setEncoding('utf8'); - почему не работает  не понятно.

		//response.setHeader('Content-Encoding', 'utf-8');
		console.log(data.toString());
	})
});
