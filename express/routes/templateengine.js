const express=require("express");
const router=express.Router();
const path=require("path");

const viewPath=path.join(__dirname,"../","html")

const data=[
    {
        name:"Priyank",
    occupation:"student"
    },
    {
        name:"Jahnavi",
    occupation:"teacher"
    }
]

const data2=[
 "Noman",
 "Joe"
]
router.get("/",(req,res)=>{
   // console.log();


   res.render("home");
})


router.get("/data",(req,res)=>{
    // console.log();
 
 
    res.render("data",{name:"shubham",list:data});
 })
 



module.exports=router;