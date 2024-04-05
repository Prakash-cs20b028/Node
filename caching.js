class Name{
	constructor(name){
		this.name=name;
	}
	getname(){
		return this.name;
	}
	setname(name){
		this.name = name;
	}
}

module.exports = Name

// module.exports = new Name("Batman")

// const var1 = require('./caching.js')

// console.log(var1.getname())
// var1.setname("Wayne")
// console.log(var1.getname())

// const var3 = require('./caching.js')
// console.log(var3.getname());
// var3.setname("Wayne2");
// console.log(var3.getname());

// module.exports = Name;

// const Name = require('./caching.js')

// const var1 = new Name("Batman")
// console.log(var1.getname());
// var1.setname("Batman-Wayne");
// console.log(var1.getname());

// const var2 = new Name("Stathon")
// console.log(var2.getname());