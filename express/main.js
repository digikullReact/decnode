const express = require("express");  // we are requirung express module
const app = express();  // We are calling express method to create an app object



// How to get 
// route params
// query params

app.use(express.json());// its a middleware that parses the json body

app.get("/", (req, res) => {
    res.send("hi there");

})


app.get("/data", (req, res) => {
    res.send("hi data");

})

// Getting request body
app.post("/data",(req,res)=>{

    console.log("Request body----",req.body);

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

 //query Params
app.get("/query", (req, res) => {
    console.log(req.query);
    res.send("hi there");

})


// route params
 app.get("/:id", (req, res) => {
    console.log(req.params.id);
    res.send("hi there");

})


 



app.listen("8080", () => {
    console.log("Server running at port 8080")
})





// You have to create a post route which sends the product inoformation
//  /product -->POST route 
// {name:"productname",brand:"",stock:""};
// store it into file --->