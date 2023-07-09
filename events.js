const eventEmitter =require("events");
const fsPromises=require("fs/promises");

const mycustomevent=new eventEmitter();


// Listener that will listen to the event

mycustomevent.on("dance",(data)=>{
    console.log("event data",data);

})


mycustomevent.on("writefile",(data)=>{
   // It will write the data in a different file
   fsPromises.writeFile("files/eventcaps.txt",data).then(res=>{
    console.log(res)
   }).catch(err=>{
    console.log(err);
   })

})

// Dispatcher that dispatches that event

mycustomevent.emit("dance","lets dance");



// To read a file 

fsPromises.readFile("files/events.txt","utf-8").then(data=>{
    // we will read the file data
    const upperCase=data.toUpperCase();

    mycustomevent.emit("writefile",upperCase)



}).catch(err=>{
    console.log(err);
})


// Task you have to read a json file 
// extract all the names from the file 
// convert them to upper case
// and write in another txt file 
// this whole logic should be event driven