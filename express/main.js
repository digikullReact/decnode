const express = require("express");  // we are requirung express module
const app = express();  // We are calling express method to create an app object
const fs=require("fs");
const productRouter=require("./routes/product");
const rootRouter=require("./routes/data");


// How to get 
// route params
// query params

app.use(express.json());// its a middleware that parses the json body

app.use("/products",productRouter)
app.use("/",rootRouter);



 



app.listen("8080", () => {
    console.log("Server running at port 8080")
})





// You have to create a post route which sends the product inoformation
//  /product -->POST route 
// {name:"productname",brand:"",stock:""};
// store it into file --->