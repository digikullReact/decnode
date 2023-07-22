const express=require("express");
const router=express.Router();
const {saveData,getData,deleteData,getDataById,editData}=require("../repository/crud");

router.get("/", (req, res) => {

    res.json({
        data:getData()
    })

})






router.post("/", (req, res) => {
    let data=saveData(req.body);

    res.json({
        message:"success",
        data:data
    })

  ///  console.log("Form incoming",req.body)

})


// You have to create put and delete routes;



module.exports=router;
