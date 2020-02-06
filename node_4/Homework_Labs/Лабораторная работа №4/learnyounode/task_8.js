const fs = require('fs');
const path = require('path');
const http = require('http');
bl = require('bl');

http.get(process.argv[2],function (response){

	 response.pipe(bl(function (err, data) { 
	 	if (err) return console.log('Произошла ошибка')

	 	data = data.toString();
	 	console.log(data.length);	
		console.log(data);	
	  }))
});
