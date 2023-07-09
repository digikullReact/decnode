const fsPromise=require("fs/promises")

fsPromise.readFile("files/data.txt","utf-8").then(data=>{
    console.log(data);
    }).catch(err=>{
        console.log(err);
    })


    class FsPromise{

        readFile(fileName,charcterEncoding){
            const promise=new Promise((resolve,reject)=>{

                fs.readFile(fileName,character,(err,data)=>{
                    if(err){
                      //  console.error(err);
                      reject(err);
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