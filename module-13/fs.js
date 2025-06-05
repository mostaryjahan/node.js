// how to read file in node js
//asynchronous, //synchronous

//synchronous way= file read-> single thread -> not go thread pool
//asynchronous way => file read -> single thread -> event loop -> threat pool -> task complete

const fs = require("fs");


console.log("task 1")
const text = "Learning file system";

fs.writeFileSync("./hello.txt", text);


console.log("task 3")

const data = fs.readFileSync("./hello.txt", {encoding : "utf-8"});


console.log("task 4")

console.log(data);
