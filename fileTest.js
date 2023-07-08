const fsPromise=require("./classFs");

fsPromise.readFile("files/data.txt","utf-8").then(data=>{
    console.log(data);

}).catch(err=>{
    console.log(err);
})