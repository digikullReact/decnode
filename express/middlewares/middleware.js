//App Level middleware
// Route Level Middleware
// Routes Level Middleware
// Error Middleware

function log(req,res,next){
    console.log(" Applevel ---Middleware Calledd-----------")

   // res.send("I stopping you from further request")
   next();
}


function RoutesLevelLog(req,res,next){

    console.log("Routes Level Middleware Calledd ---- -----------")
    next();
}

function RouteLevelLog(req,res,next){

    console.log("single route  Level Middleware Calledd ---- -----------")
    next();
}

module.exports={
    log,
    RoutesLevelLog,
    RouteLevelLog
}


// You have to create a routes level middleware 
// And log all the names of the routes that are called --