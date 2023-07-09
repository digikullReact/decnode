const eventEmitter=require("events");
const fs=require("fs")
const customEventEmitter=new eventEmitter();

customEventEmitter.on("change",(filename)=>{

    // We will read the file and print out the content 
    
 console.log(fs.readFileSync(filename,'utf-8'));
})


module.exports=customEventEmitter