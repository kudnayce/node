const mymodule = require('./task_6_1.js');
//let dir = process.cwd();
//let otbor = 'txt';
let dir = process.argv[2];
let otbor = process.argv[3];
//mymodule(dir,otbor);
mymodule(dir,otbor,function (err,list) {
	if(err) {
		return console.log('Произошла ошибка ');
	}
	else
	{
		list.forEach(function (file_name) {
			console.log(file_name)
		})
	}
});
