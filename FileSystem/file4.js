const fs = require("node:fs");

const obj1 = fs.writeFileSync("file.txt","Hello Deepak! How are you?")

const readfile = fs.createReadStream("file.txt",{
	encoding: "utf-8",
})

const writefile = fs.createWriteStream("file3.txt");

readfile.pipe(writefile); 

// readfile.on("data",(chunk) =>{
// 	console.log(chunk);
// 	writefile.write(chunk);
// })