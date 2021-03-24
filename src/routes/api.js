const express = require('express');
const router = express.Router();
//import controller
const customerController = require('./../controllers/CustomerController');

router.post('/customer/create', customerController.create);
router.get('/customer/test', customerController.testApi);

module.exports = router;