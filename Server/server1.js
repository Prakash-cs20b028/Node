const http = require("node:http");
const fs = require("node:fs");

const server = http.createServer((req,res)=>{
	res.writeHead(200,{"Content-Type":"text/html"});
    const name = "Prakash";
    let html = fs.readFileSync("./data1.html","utf-8").pipe();

    html = html.replace("{name}",name);
    res.end(html)
});

server.listen(3000,()=>{
	console.log("Server is running at 3000 port.")
})