const http = require("node:http");

const server = http.createServer((req,res)=>{
	
	const superhero = {
		firstname: "Bruce",
		middlename: "Hero",
		lastname: "Wayne"
	};

	res.writeHead(200);
	res.end(JSON.stringify(superhero));
})

server.listen(3000,() =>{
	console.log("Server is running");
})