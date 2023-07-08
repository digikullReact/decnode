const fs=require("fs");
const os=require("os");


// Reading a file 
fs.readFile("files/data.txt","utf-8",(err,data)=>{
    if(err){
      //  console.error(err);
        return ;
     
    }
   // console.log("Data",data);

})

// write to a file 
// it creates the file if it doesn't exists
// it doesnt creates the directory for you it only creates file

fs.writeFile("files/data.txt","shubham,jai,stuti,sugar",(err,data)=>{
    if(err){
        console.error(err);
        return ;
     
    }
    // the data will always be undefined  if it writes successfully
    console.log("Data",data);

})

// Append file --

// you have already a file and you want to add the content or append the content

fs.appendFile("files/names.txt",`dipanshu,paramjeet,sachin${os.EOL}`,(err,data)=>{
    if(err){
        console.error(err);
        return ;
     
    }
    // the data will always be undefined  if it writes successfully
    console.log("Data",data);

})

// so you have to read a file of string 
// you have to convert all the names into uppercase
// you have to write it in other file