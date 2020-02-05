const fs = require('fs');
const path = require('path');
//let dir = process.cwd();
//let otbor = 'txt';
let dir = process.argv[2];
let otbor = process.argv[3];
function get_files_filtr(dir,otbor,callback){
	fs.readdir(dir,function (err,list) {

		list = list.filter(function (file_name) {
			return path.extname(file_name) === '.' + otbor
		});
		callback(err,list);
	})
}
get_files_filtr(dir,otbor,function (err,list) {
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

