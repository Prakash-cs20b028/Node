const fs = require("node:fs/promises");

console.log("first");

async function readFile(){

	try{
		const data = await fs.readFile("file.txt","utf-8");
		console.log(data);
	}
	catch(error){
		console.log(error);
	}
}

readFile();

// fs.readFile("./file.txt","utf-8")  // this is again performing as asynchronous.
//    .then((data)=>{
//    	   console.log(data);
//    })
//    .catch((error)=>{
//    	   console.log(error);
//    })


console.log("second");

