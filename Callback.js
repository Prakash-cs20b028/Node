// This is an example of a synchronous callback function. 

function fun1(name)
{
	console.log(`Hello ${name}`);
}

const HigherOrderFun = (callback) =>
{
	const name = "Prakash";
	callback(name);
}

HigherOrderFun(fun1)

// Asynchronous callback is often used in the browser. 