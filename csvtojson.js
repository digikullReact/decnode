const fs=require("fs");
const readline = require('node:readline');
const stream=require("stream");

const rs=fs.createReadStream("files/big.csv")
const ws=new stream;

const rl=readline.createInterface(rs,ws)

rl.on("line",(data)=>{
    console.log("Line----",data,"\r\n")  // you can operate on this data and you can run your logic
})
