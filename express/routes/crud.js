const express=require("express");
const router=express.Router();
const {saveData,getData}=require("../repository/crud");

router.get("/", (req, res) => {
    res.render("form");

})

router.get("/viewData", (req, res) => {
    const data=getData();
    res.render("viewData",{list:data});

})

router.post("/", (req, res) => {
    saveData(req.body);
    res.redirect("/crud/viewData");

  ///  console.log("Form incoming",req.body)

})

module.exports=router;

// To complete the viewData page 
// show the data in table format
// Two buttons one on view data
// one on form