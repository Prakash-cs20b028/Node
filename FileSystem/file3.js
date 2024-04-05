const fs = require("node:fs");

// use the stream to store the data from one file into another file. 

const readfile = fs.createReadStream("./inp1.txt",{
	encoding: "utf-8",
	highWaterMark: 4,   // a chunk of four byte size. 
});

const writefile = fs.createWriteStream("./out1.txt");

readfile.on("data",(chunk)=>{
	console.log(chunk);
	writefile.write(chunk);

})