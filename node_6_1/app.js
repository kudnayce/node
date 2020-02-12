const express = require('express');
const mustacheExpress = require('mustache-express');
let app = express();

app.set('views', __dirname + '/views');

app.engine('mustache', mustacheExpress());

app.set('view engine', 'mustache');

app.get('/', function(req, res, next){
	res.render('index', { title: 'Первый опыт с express и mustache',
	url_pages:'https://avatars.mds.yandex.net/get-pdb/2395147/247d87a6-ec16-43d3-9987-0a0854c5ea8d/s1200',
		a1:'class_a1'

	});
});

app.listen(8080);
