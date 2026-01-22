// const express = require('express');
// const FirstController = require('../Controller/firstController');
// const router = express.Router();
// // router.get('/get-data', FirstController.TestingAPI);
// router.get('/get-data', FirstController.GetData);
// module.exports = router;

const express = require('express')
const FirstController = require("../Controller/firstController")
const route = express.Router();

// File Upload Code

const multer = require('multer')
const path = require('path')

const Storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,"uploads")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const FileFilters = (req,file,cb) =>{
    const AllowedTypes = /png|jpg|jpeg|svg/
    const extension = path.extname(file.originalname).toLowerCase()
    if(AllowedTypes.test(extension)){
        cb(null,true)
    }
    else{
        cb(new Error("Not Valid Formate"))
    }
}

const Upload = multer({
    storage:Storage,
    fileFilter : FileFilters,
    limits:{
        fileSize:1024*1024*2
    }
})

route.post("/encrypted-token",FirstController.Encryption)
route.post("/verify-encrypted-token",FirstController.VerifyEncryption)
route.post("/file-upload",Upload.array('file',3),FirstController.UploadFile)

route.post("/add-data",FirstController.AddData)
route.get('/get-data',FirstController.GetData)
route.patch("/update-data/:id",FirstController.UpdateData)
route.delete("/delete-data/:id",FirstController.DeleteData)
            
module.exports = route;




// http://localhost:9000/Lord.jpg
