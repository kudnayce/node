const fs = require('fs');
let col = undefined;
let faile_name = process.argv[2];
function get_col(callback) {
	fs.readFile(faile_name, 'utf8', function doneReading(err, data) {
		col = data.split('\n').length-1;
		callback()
	})
}

function ConsoleCol() {
	console.log(col)
}

get_col(ConsoleCol);
