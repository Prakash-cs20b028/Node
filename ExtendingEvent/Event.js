const pizzashop = require('./pizza-shop');
const drink = require('./drink-machine');

const obj1 = new pizzashop();
const obj2 = new drink();


obj1.on('order',(small)=>{
	console.log(`Pizza is ready which is ${small}`);
	obj2.getdrink();
})

obj1.order('small');
obj1.display();