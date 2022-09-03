var express = require("express");
var router = express.Router();
const {merchant_payment} = require("../controllers/merchant_payment")

router.post("/create-order", merchant_payment)

module.exports = router;