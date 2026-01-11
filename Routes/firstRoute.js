// const express = require('express');
// const FirstController = require('../Controller/firstController');
// const router = express.Router();
// // router.get('/get-data', FirstController.TestingAPI);
// router.get('/get-data', FirstController.GetData);
// module.exports = router;

const express = require('express')
const FirstController = require("../Controller/firstController")
const route = express.Router();

route.post("/add-data",FirstController.AddData)
route.get('/get-data',FirstController.GetData)
route.patch("/update-data/:id",FirstController.UpdateData)
route.delete("/delete-data/:id",FirstController.DeleteData)
            
module.exports = route;