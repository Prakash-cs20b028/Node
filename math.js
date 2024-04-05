module.exports.add =(a,b)=>{      // this is the four technique. In here, we can use just exports instead of module.exports too. 
	return a+b;
} 
module.exports.multiply = (a,b)=>{
	return a*b;
}

//   3rd technique

// const add = (a,b)=>{
// 	return a+b;
// }                        

// const multiply = (a,b)=>{
// 	return a*b;
// }

// module.exports = {add,multiply};  //passing function as parameterl.

//   2nd technique

// module.exports = (a,b)=>{
// 	return a+b;         
// }

//	 1st technique

// const add =(a,b)=>{    
// 	return a+b;
// }

// module.exports = add;