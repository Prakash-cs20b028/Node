const path = require("path");

console.log(__filename)
console.log(__dirname)

console.log(path.basename(__filename));
console.log(path.basename(__dirname));

console.log(path.extname(__filename));
console.log(path.extname(__dirname));

console.log(path.parse(__filename));

console.log(path.join("file1","file2","index.html"));
console.log(path.join("/file1","file2","index.html"));
console.log(path.join("/file1","/file2","index.html"));
console.log(path.join("file1","/file2","/index.html"));

console.log(path.resolve("file1","file2","index.html"));
console.log(path.resolve("//file1","file2","index.html"));
console.log(path.resolve("/file1","/file2","index.html"));
console.log(path.resolve("file1","/file2","/index.html"));
