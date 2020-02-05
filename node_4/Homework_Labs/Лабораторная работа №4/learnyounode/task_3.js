const fs = require('fs');
let faile_name = process.argv[2];
let file_content = fs.readFileSync(faile_name,'utf-8');
console.log(file_content.split('\n').length-1);
