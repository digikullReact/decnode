const fs=require("fs");



class FsPromise{


    readFile(fileName,character){
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

module.exports=new FsPromise();