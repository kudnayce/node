const http = require('http');

const app = http.createServer(handler);

app.listen(8080, function(){
	console.log('Сервак готов и слушает порт 8080');
});

function handler(request, respons){
	console.log('Пришёл запрос!!!');

	respons.writeHead(200, {
		'Content-Type': 'text/plain'
	});

	respons.end('HTTP works!!!');
}
