const fileUpload=(req,res)=>{
    console.log(req.body); // pass the users id
  ///  console.log(req.files);
    const uploadedFileName=req.files.file.path.split("/");
    let  fullUrl = req.protocol + '://' + req.get('host') ;
    res.json({
        message:"Success",
        data:`${fullUrl}/${uploadedFileName[uploadedFileName.length-1]}`
    })

  // You have to write logic to update the users image in the db 
  // Update query and update the imageName in the db or collections
  // $set:{image:fullUrl}

}


module.exports={
    fileUpload
}