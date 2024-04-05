const fs = require("fs");

const readstream = fs.createReadStream(__filename);
readstream.close();

readstream.on("close",()=>{
	console.log("Close queue");
});

setTimeout(()=>{
	console.log("Timer queue");
});

setImmediate(()=>{
	console.log("Check queue");
});

fs.readFile(__filename,()=>{
	console.log("I/O queue");
})

process.nextTick(()=>{
	console.log("nextTick queue");
});

Promise.resolve().then(()=>{
	console.log("Promise queue");
});