var v1 = 2
var v2 = 2
var v3 = '2'

console.log(v1 == v2)
console.log(v1 === v2)
console.log(v1==v3)
console.log(v1===v3)

const fun =()=>{
	return 'hello arrow function'
}

const fun1 = function(){
	console.log('hello normal function')
}
console.log(fun())
fun1()