let http = require('http'); // подключение модуля для работы с http
let fs = require('fs'); // подключение модуля для работы с файлом

let mimeTypes = {
	'.js': 'text/javascript',
	'.html': 'text/html',
	'.css': 'text/css',
	'.jpg': 'image/jpeg',
	'.gif': 'image/gif'
};

http.createServer((request, response) => {
	let pathname;
	console.log("Request: " + request.url);
	if (request.url === '/')
		pathname = 'site/index.html';
	else
		pathname = 'site' + request.url;
	fs.readFile(pathname, 'utf8', (err, data) => {
		if (err) {
			console.log('Could not find or open file for reading\n');
			response.statusCode = 404;
			response.end();
		} else {
			console.log(`The file ${pathname} is read and sent to the client\n`);
			response.writeHead(200, {
				'Content-Type': mimeTypes[path.extname(pathname)]
			});
			response.end(data);
		}
	});

}).listen(8080, ()=>{
	console.log("HTTP server works in 8080 port!\n");
});

