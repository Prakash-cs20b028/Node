const buffer = new Buffer.from("Deepak");

console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());


buffer.write("Prak");


console.log(buffer);
console.log(buffer.toString());
console.log(buffer.toJSON());
