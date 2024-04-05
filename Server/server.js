const http = require("node:http");
const fs = require("node:fs");
// create server and then listen it.

// const server = http.createServer((req,res) =>{
// 	res.writeHead(200);
// 	res.end("Hello server I have connected with you.");
// });

const server = http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/html"});
    //	res.end("<h1>From data.html</h1>");  //Sending html data from server to the clients.

    res.end(fs.readFileSync("./data.html","utf-8"));  // This line is used to invoke file from somewhere else and sends them to the clients.
})

server.listen(3000,()=>{
	console.log(`Server is running at port 3000`);
});