const http = require("node:http");

const server = http.createServer((req,res)=>{
	
	if(req.url === "/")
	{
		res.writeHead(200, {"Content-Type":"text/plain"});
		res.end("Home Page");
	}
	else if(req.url === "/about")
	{
		res.writeHead(200, {"Content-Type":"text/plain"});
		res.end("About page");

	}
	else if(req.url === "/api")
	{
		res.writeHead(200,{"Content-Type":"text/plain"});
		res.end(JSON.stringify({
			firstname: "Prakash",
			lastname: "Deepak"
		}));
	}
	else
	{
		res.writeHead(200,{"Content-Type":"text/html"})
		res.end("<h1>Error 404</h1>");
	}

})

server.listen(3000,()=>{
	console.log("Server is running at port 3000");
})