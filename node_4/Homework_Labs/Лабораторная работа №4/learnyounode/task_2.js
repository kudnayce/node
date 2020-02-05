//console.log(process.argv);
let argv_s = process.argv;
let res = 0;
for (let i = 0; i < argv_s.length; i++) {
	if ( isNaN(Number(argv_s[i]))  ){
		continue;
	}
	else
		res = res + Number(argv_s[i]);
}
console.log(res);
