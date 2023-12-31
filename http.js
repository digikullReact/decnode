const http = require("http");
const fs = require("fs");


const listener = function (req, res) {
  //  console.log(req.url)
    const method = req.method
    switch (method) {
        case "GET":
            /// We will handle all get requests here
            if (req.url == "/") {  // root route
                // We will send a text response saying that its a root route
                res.write("Hello Root route");
                res.end();  // it is required to close the request response cycle


            } else if (req.url == "/html") {
                res.write('<h1 style=color:green>Hello World</h1>');
                res.end();  // it is required to close the request response cycle


            }else if (req.url == "/dashboard") {
                fs.readFile("html/dashboard.html", (err, data) => {
                    if (err) {
                        res.write(err.message)
                        res.end();
                        return;

                    }

                    // We have 
                   // res.setHeader("Content-Type", "image/jpeg")
                    res.write(data);
                    res.end();
                    // res.end(data);

                })


            }
             else if (req.url == "/image") {

                fs.readFile("images/dog.jpeg", (err, data) => {
                    if (err) {
                        res.write(err.message)
                        res.end();
                        return;

                    }

                    // We have 
                    res.setHeader("Content-Type", "image/jpeg")
                    res.write(data);
                    res.end();
                    // res.end(data);

                })


            }else if (req.url == "/pdf") {

                fs.readFile("files/js.pdf", (err, data) => {
                    if (err) {
                        res.write(err.message)
                        res.end();
                        return;

                    }

                    // We have 
                    res.setHeader("Content-Type", "application/pdf")
                    res.write(data);
                    res.end();
                    // res.end(data);

                })


            }else if (req.url=="/json"){

                res.setHeader("Content-Type", "application/json")
                res.write('{"name":"John"}');
                res.end();

            }
            else if (req.url=="/jsondata"){

                fs.readFile("db/db.json",'utf-8',(err,data)=>{

                    if(err){
                        res.end("Error in reading database");
                        return;
                    }

                    res.setHeader("Content-Type", "application/json")
                    res.write(data);
                    res.end();
    

                })

              
            }


            break;
        case "POST":
            if (req.url=="/postdata"){
                let body="";
                // We will parse the data 
                req.on("data",(chunk)=>{
                    body=body+chunk.toString();

                })

                req.on("end",()=>{
                   //console.log(JSON.parse(body).name);

                   // Read the records --
                   fs.readFile("db/db.json",'utf-8',(err,data)=>{
                    if(err){
                        res.end("Error in reading database");
                        return;
                    }

                    // We will have the records

                    console.log("Data recvd",data);
                    const userData=JSON.parse(body)
                    userData.id = "id" + Math.random().toString(16).slice(2)


                    // We have to add id to every data for making them unqiue

                    if (data.length>0){
                       // We will append the records

                       const existingData=[...JSON.parse(data),userData]
                       fs.writeFile("db/db.json",JSON.stringify(existingData),(err,data)=>{
                        if (err){
                            res.end("Error in writing  database");
                            return;
                        }
                        res.end("Data added successfully");
                        return;
                     });




                    }else{
                         // Insert the record
                         const data=[userData]


                         fs.writeFile("db/db.json",JSON.stringify(data),(err,data)=>{
                            if (err){
                                res.end("Error in writing  database");
                                return;
                            }
                            res.end("Data added successfully");
                            return;
                         });

                    }

                   })


                  /// fs.appendFile()

                   // You have to write the data in the file 
                   // Add the user data in a file
                   // Multiple records in json file 

                  // res.end("Request Received");

                })



            }
            // We will handle post request here
            break;

       case "PUT":
        // Write the put query to update the data 
        if(req.url.includes("putdata")){

            // We will handle the put request
            console.log(req.url.split("/"));
            res.end("Put request recvd");

            // Your task -- is to modify the existing data
        }

        break;

case "DELETE":

// you an handle delete request here 
// Your task is to write delete Api as well 
        
       break;
        default:
            res.end("Method Not configured")

    }


}


const server = http.createServer(listener)
// We are creating a http server that will listen on a particular port
server.listen("8080", () => {
    console.log("Server is started")
})