setTimeout(()=>{
	console.log("setTimeout1");
},0);
setTimeout(()=>{
	console.log("setTimeout2");
	process.nextTick(()=>{
		console.log("nextTick1 in setTimeout2");
		setTimeout(()=>{
			console.log("Inner");
		},0)
	},0);
},0);
setTimeout(()=>{
	console.log("setTimeout3");
},0);

Promise.resolve().then(()=>{
	console.log("Promise1");
})
process.nextTick(()=>{
	console.log("nextTick1");
})