// Встроенный модуль http поддерживает функциональность HTTP-сервера и HTTP-клиента
const http = require('http');
// Встроенный модуль fs поддерживает функциональность файловой системы
const fs = require('fs');
// Встроенный модуль path поддерживает функциональность, связанную с путями файловой системы
const path = require('path');
// Дополнительный модуль mime поддерживает порождение MIME-типов на основе расширения имен файлов
const mime = require('mime');
// Объект cache реализует хранение содержимого кэшированных файлов
const cache = {};

const server = http.createServer(function(request, response) {
	var filePath = false;
	if (request.url == '404.html') {
// Определение HTML-файла, обслуживаемого по умолчанию
		console.log('public' + request.url);
		filePath = '404.html';
	} else {
// Преобразование URL-адреса в относительный путь к файлу
		console.log('public' + request.url);
		filePath =  request.url;
	}
	var absPath = 'style.css';
// Обслуживание статического файла
	serveStatic(response, cache, absPath);
});

server.listen(8080, function() {
	console.log("Server listening on port 8080.");
});


function send404(response) {
	response.writeHead(404, {'Content-Type': 'text/plain'});
	response.write('Error 404: resource not found.');
	response.end();
}

function sendFile(response, filePath, fileContents) {
	response.writeHead(
		200,
		{"content-type": mime.lookup(path.basename(filePath))}
	);
	response.end(fileContents);
}

function serveStatic(response, cache, absPath) {
// Проверка факта кэширования файла в памяти
	if (cache[absPath]) {
// Обслуживание файла, находящегося в памяти
		sendFile(response, absPath, cache[absPath]);
	} else {
// Проверка факта существования файла
		fs.exists(absPath, function(exists) {
			if (exists) {
// Считывание файла с диска
				fs.readFile(absPath, function(err, data) {
					if (err) {
						send404(response);
					} else {
						cache[absPath] = data;
// Обслуживание файла, считанного с диска
						sendFile(response, absPath, data);
					}
				});
			} else {
// Отсылка HTTP-ответа 404
				send404(response);
			}
		});
	}
}
