const EventHandler = require('node:events')

const emitter = new EventHandler();

//Full filling the request
emitter.on('order-pizza',(arg1,arg2)=>{

	console.log(`Pizza is ordered which is ${arg1} and made up of ${arg2}, has been baked too`);
})

emitter.on('order-pizza',(arg1,arg2)=>{
	if(arg1 == 'large'){
		console.log(`Pizza is large`);
	}
})

// making a request 
// emitter.emit('order-pizza')

emitter.emit('order-pizza', 'large','mushroom')