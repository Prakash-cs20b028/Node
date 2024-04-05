const fs = require("node:fs");

console.log("first");
const obj1 = fs.readFileSync("./inp1.txt","utf-8");
console.log(obj1); // will give the hexadecimal representation. 
//console.log(obj1.toString()); when I mentioned utf-8 in the above function no need to write this line again. 

console.log("second");

// This is the asynchronous nature. To remove the blocking nature, we use the below concept.
fs.readFile('./inp1.txt','utf-8',(error,data) =>{
	if(error)
	{
		console.log(error);
	}
	else
	{
		console.log(data);
	}
})

console.log("Third"); // This is being printed before the above asynchronour nature. 

// Writting into file.

const obj2 = fs.writeFileSync('./greet.txt',"Hello Deepak!");

// fs.readFile('./greet.txt','utf-8',(error,data)=>{
// 	if(error){
// 		console.log(error);
// 	}
// 	else{
// 		console.log(data);
// 	}
// })

fs.writeFile('./greet.txt'," Hello World!",{flag:"a"},(error)=>{
	if(error){
		console.log(error);
	}
	else{
		console.log("File written")
	}
})

fs.readFile('./greet.txt','utf-8',(error,data)=>{
	if(error){
		console.log(error);
	}
	else{
		console.log(data);
	}
})