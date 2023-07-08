const fs=require("fs");

// Read the contents of the directory or folder

fs.readdir("files",(err,data)=>{
    if (err){
        console.log(err);
        return;
    }
    console.log(data);// the array of all the file names
})

// to check whether its a directory or not
const filePath="files"
fs.readdir(filePath,(err,data)=>{
    if (err){
        console.log(err);
        return;
    }
   // console.log(data);// the array of all the file names

    for(let i=0;i<data.length;i++){
      console.log(  fs.lstatSync(`${filePath}/${data[i]}`).isDirectory());

    }
})


// If you want to create a director/folder call this method

fs.mkdir("kl",(err)=>{
    if (err){
        console.log(err);
        return;
    }
})

// You are given a directory ,you have to print the name of all the files 
// in the directory as well as in the nested directories