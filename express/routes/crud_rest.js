const express=require("express");
const router=express.Router();
const {saveData,getData,deleteData,getDataById,editData}=require("../repository/mongodb");

router.get("/",async  (req, res) => {

    const data=await getData()
    res.json({
        data:data
    })

})

//






router.post("/",async (req, res) => {
    let data=await saveData(req.body)

    res.json({
        message:"success",
        data:data
    })

  ///  console.log("Form incoming",req.body)

})

router.put("/:id",async  (req, res) => {
    req.body.id=req.params.id
    let data=await editData(req.body);

    res.json({
        message:"success",
        data:data
    })

  ///  console.log("Form incoming",req.body)

})

router.delete("/:id", async (req, res) => {
  
    let data=await deleteData(req.params.id);

    res.json({
        message:"succesfully deleted",
        data:data
    })

  ///  console.log("Form incoming",req.body)

})



// You have to create put and delete routes;



module.exports=router;
