process.nextTick(()=>{
	console.log("nextTick1");
})

process.nextTick(()=>{
	console.log("nextTick2");
	process.nextTick(()=>{
		console.log("nextTick inside nextTick");
	})
})

process.nextTick(()=>{
	console.log("nextTick3");
})

Promise.resolve().then(()=>{
	console.log("Promise1");
})

Promise.resolve().then(()=>{
	console.log("Promise2");
	process.nextTick(()=>{
		console.log("nextTick inside promise");
	})
})

Promise.resolve().then(()=>{
	console.log("Promise3");
})