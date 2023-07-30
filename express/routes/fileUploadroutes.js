const express = require("express");
const router = express.Router();
const  multipart = require('connect-multiparty');
const path=require("path");
const { fileUpload } = require("../controllers/fileController");

const  multipartMiddleware = multipart({uploadDir:path.join(__dirname,"../uploads")});

// To my local folder --->
router.post("/local",multipartMiddleware, fileUpload)








// You have to create put and delete routes;



module.exports = router;
