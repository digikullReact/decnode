const eventEmitter =require("events");
const mycustomevent=new eventEmitter();

// listeners will be attached here 

mycustomevent.on("file",(data)=>{
    console.log("File event emitted",data);
})


module.exports=mycustomevent;