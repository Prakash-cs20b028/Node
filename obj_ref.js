const obj1 = {
	name:"Bruce-Wayne"
}

let obj2 = obj1;
obj2.name = "Kent";
console.log(obj1.name);

let obj3 = obj1;  // In this, reference is broken
obj3 = {
	name:"Wakanda"
}
console.log(obj1.name)