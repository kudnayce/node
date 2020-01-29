const http = require('http');

const app = http.createServer(handler);

app.listen(8080, function(){
	console.log('Сервак готов и слушает порт 8080');
});

function handler(request, response){
	console.log('HTTP works');

	status = 200;

	response.writeHead(404, {
		'Content-Type': 'text/html'
	});


	response.write('<h1>Hello</h1>');

	response.end();
	response.end('HTTP works!!!');
}
