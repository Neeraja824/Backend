const express = require('express');
const FirstController = require('../Controller/firstController');
const router = express.Router();
// router.get('/get-data', FirstController.TestingAPI);
router.get('/get-data', FirstController.GetData);
module.exports = router;