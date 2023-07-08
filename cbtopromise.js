const fs=require("fs");
const fsPromise=require("fs/promises");


class FsPromise{


    readFile(){
          // returns a promise

  const promise=new Promise((resolve,reject)=>{


    // Reading a file 
    fs.readFile(fileName,character,(err,data)=>{
        if(err){
            reject(err)
          //  console.error(err);
            return ;
         
        }
        resolve(data);
       // console.log("Data",data);
    
    })
    
      })
    
      return promise;

    }
}


function ReadFilePromise(fileName,character){
  // returns a promise

  const promise=new Promise((resolve,reject)=>{


// Reading a file 
fs.readFile(fileName,character,(err,data)=>{
    if(err){
        reject(err)
      //  console.error(err);
        return ;
     
    }
    resolve(data);
   // console.log("Data",data);

})

  })

  return promise;

}


fsPromise.readFile("files/data.txt","utf-8").then(data=>{
    console.log(data);

}).catch(err=>{
    console.log(err);
})


ReadFilePromise("files/names.txt","utf-8").then(data=>{
   // console.log(data);

}).catch(err=>{
    console.log(err);
})

