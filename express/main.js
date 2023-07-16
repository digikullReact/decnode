const express = require("express");  // we are requirung express module
const app = express();  // We are calling express method to create an app object

app.get("/", (req, res) => {
    res.send("hi there");

})

app.post("/data",(req,res)=>{
   /**
    * res.setHeader("content-type","application/json");
    * res.write('{name:"shubham"}')
    * res.end()
    */

    res.json({
        name:"shubham"

    })

})

app.put("/data",(req,res)=>{
    /**
     * res.setHeader("content-type","application/json");
     * res.write('{name:"shubham"}')
     * res.end()
     */
 
     res.json({
         name:"Put request"
 
     })
 
 })


 app.delete("/data",(req,res)=>{
    /**
     * res.setHeader("content-type","application/json");
     * res.write('{name:"shubham"}')
     * res.end()
     */
 
     res.json({
         name:"Delete request"
 
     })
 
 })

 



app.listen("8080", () => {
    console.log("Server running at port 8080")
})



