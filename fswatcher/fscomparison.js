const fs=require("fs");
const fsPromises=require("fs/promises");

// asynchronous
/*
fs.readFile("data.txt",'utf-8',(err,data)=>{
    if (err){
        console.log(err);
        return;
    }

    console.log(data);
})

fsPromises.readFile("data.txt",'utf-8').then(data=>{
    console.log(data);
}).catch(err=>{
    console.log(err);
})
*/



//const data=fs.readFileSync("data.txt",'utf-8')  // synchronous version
//console.log(data);

console.log("-------------------------hi there");