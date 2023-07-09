const fs=require("fs");
const customervent=require("./customevent");

const data=fs.readFileSync("data.txt","utf-8"); // its a sync blocking process ,it will block the execution
// until the file is read completely
customervent.emit("file",data);
console.log("I would be executed at the end");