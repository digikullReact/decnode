const fs=require("fs");

function ReadStream(){
    const rs=fs.createReadStream("files/random.txt","utf-8");

    // emit("data","file read data")
    // emit("error");
    // emit("end");

rs.on("data",(chunk)=>{
    console.log(chunk);
})

rs.on("error",(err)=>{
    console.log("Error ocuurred",err);
})

// this would be called once you finish reading the file 
rs.on("end",()=>{
    console.log("File read successfully");
})

}




function ReadFileManual(){
    fs.readFile("files/random.txt","utf-8",(err,data)=>{
        if (err){
            console.log(err);
            return 
        }
        console.log(data);
    })
}



function WriteStream(){
  const ws=  fs.createWriteStream("files/data.csv");
  ws.write("Some random data","utf-8");

  ws.on("finish",()=>{
    console.log("Finished writing in file")
  })

}
//WriteStream();

// combining readtsream and write stream 


function CombineStream(){


    const rs=fs.createReadStream("files/big.csv","utf-8");
    const ws=  fs.createWriteStream("files/something.csv");


    rs.pipe(ws)  // piping into the write stream for the data write

    rs.on("error",(err)=>{
        console.log("Error ocuurred",err);
    })
    
    // this would be called once you finish reading the file 
    rs.on("end",()=>{
        console.log("File read  and written successfully");
    })


}

ReadStream();
//ReadFileManual()
//CombineStream()





// Read a csv file and you have to convert the csv file to json
// Create csv to json converter
/**
 * [{
 * "Series_Reference":"BOPQ.S06AC000000000A",
 * "Period",""
 * },
 * 
 * 
 * ]
 * 
 * 
 */