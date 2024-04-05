const fs = require("node:fs");

setTimeout(()=>{
	console.log("setTimeout1");
},0);
fs.readFile(__filename,()=>{
	console.log("This is readFile1");
});
setImmediate(()=>{
	console.log("setImmediate");
})
// process.nextTick(()=>{
// 	console.log("nextTick1");
// });
// Promise.resolve().then(()=>{
// 	console.log("Promise1");
// });