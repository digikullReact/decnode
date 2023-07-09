const eventEmitter =require("events");

const fsPromises=require("fs/promises");

const mycustomevent=new eventEmitter();

mycustomevent.on("json",(data)=>{
    console.log(data);

    // We can write it into file
    fsPromises.writeFile("files/json.txt",data).then(res=>{

    }).catch(err=>{
        console.log(err);
    })
})

const readFileJson=(name)=>{
    fsPromises.readFile(name,"utf-8").then(data=>{

        // will be in form of string
        const obj=JSON.parse(data);
        const name=obj.map(ele=>(ele.name).toLocaleUpperCase());
      //  console.log(name)

        // emit the event
        mycustomevent.emit("json",name)

    }).catch(err=>{
        console.log(err);
    })
}

readFileJson("files/data.json")
