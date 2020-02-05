const events = require('events');

const eventEmitter = new events.EventEmitter();


eventEmitter.on('click', function(num){
	console.log('Сработало событие click 1 Кол_во ' + num);
});



eventEmitter.on('click', function(num){
	console.log('Сработало событие click 2 Кол_во ' + num);
});

eventEmitter.emit('click',5);
