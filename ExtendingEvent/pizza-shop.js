//const EventEmitter = require('node:events');

class pizzashop{
	constructor(){
		
		this.ordernumber=0;
	}

	order(small){
		this.ordernumber++;
		this.emit('order',small);
	}
	display(){
		console.log("current order is " + this.ordernumber);
	}
}

module.exports = pizzashop;