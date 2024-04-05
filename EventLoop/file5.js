const fs = require("fs");

fs.readFile(__filename, () => {
  console.log("this is readFile 1");
});

setTimeout(() => console.log("this is setTimeout 1"), 0);
setImmediate(() => console.log("this is setImmediate 1"));

// for (let i = 0; i < 2000000000; i++) {}


// const fs = require("fs");

// fs.readFile(__filename,()=>{
// 	console.log("readFile");
// })

// setTimeout(()=>{
// 	console.log("setTimeout1");
// },0);

// setImmediate(()=>{
// 	console.log("setImmediate1");
// });


// setImmediate(()=>{
// 	console.log("setImmediate2");
// 	process.nextTick(()=>{
// 		console.log("nextTick1");
// 	});
// 	Promise.resolve().then(()=>{
// 		console.log("Promise1");
// 	});
// });

// setImmediate(()=>{
// 	console.log("setImmediate3");
// });
