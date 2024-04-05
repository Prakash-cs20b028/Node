
// first synchronous tasks runs then the asynchronous.
console.log("first");

Promise.resolve().then(()=>{
	console.log("This is the promise queue");
})

process.nextTick(()=>{
	console.log("This is the nextTick1 ");
})


process.nextTick(()=>{
	console.log("This is the nextTick2");  
})

console.log("second");