const http = require("http");
const fs = require("fs");


const listener = function (req, res) {
    console.log(req.url)
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


            break;
        case "POST":
            // We will handle post request here
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