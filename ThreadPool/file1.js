const crypto = require("node:crypto");

const start = Date.now();

// This is the synchronous nature. 

// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");
// crypto.pbkdf2Sync("password","salt",100000,512,"sha512");


// console.log("Hash:",Date.now()-start);

// pbkdf2 means password based key defined function. And Sync means synchronous nature. 

// Now let us look at the Asynchronous nature. 
process.env.UV_THREADPOOL_SIZE = 16;
let Max_calls = 16;

for(let i=0;i<Max_calls;i++)
{
	crypto.pbkdf2("password","salt",100000,512,"sha512",()=>{
		console.log(`Hash ${i+1}`, Date.now()-start);
	})
}

