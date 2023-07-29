const bcrypt = require('bcrypt');
const saltRounds = 10;


const encryptPassword=(req,res,next)=>{
    const password=req.body.password;
    // we will encrypt the password here

    bcrypt.hash(password, saltRounds, function(err, hash) {
        if (err){
            res.send("Error occurred");
            console.log(err);
            return ;
        }
        req.body.password=hash;

        next();

    });

}

module.exports={
    encryptPassword
}