const http = require('http');
const fs   = require('fs');
const filename = "index.html";

const arrfilenames = [
	"header.html",
	"body.html",
	"footer.html"
];


const app = http.createServer(handler);
app.listen(8080, function(){
	console.log('Сервак готов и слушает порт 8080');
});

function handler(request, response){
		let data1,data2,data3;

		fs.readFile(arrfilenames[0], 'utf8', (err, data1) => {
			if (err) {
				console.log('Could not find or open file for reading');
				response.statusCode = 404;
				response.end();
			} else {
				console.log(`The file ${arrfilenames[0]} is read and sent to the client`);
				response.writeHead(200, {'Content-Type':'text/html'});

					fs.readFile(arrfilenames[1], 'utf8', (err, data2) => {
					if (err) {
						console.log('Could not find or open file for reading');
						response.statusCode = 404;
						response.end();
					} else {
						console.log(`Файл ${arrfilenames[1]} прочитан и отправлен`);
						response.writeHead(200, {'Content-Type':'text/html'});

						fs.readFile(arrfilenames[2], 'utf8', (err, data3) => {
							if (err) {
								console.log('Could not find or open file for reading');
								response.statusCode = 404;
								response.end();
							} else {
								console.log(`Файл ${arrfilenames[2]} прочитан и отправлен`);
								response.writeHead(200, {'Content-Type':'text/html'});

								response.end(data1 +" " + data2 + " " +data3 );
							}
						});
					}
				});
			}
		});








}
