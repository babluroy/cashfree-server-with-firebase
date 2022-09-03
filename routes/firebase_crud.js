const express = require("express");
const router = express.Router();
const {readMerchantData,searchRawString} = require("../controllers/firebase_crud");

/* @GET
Migrate Merchant_data/Payment_Information node to All_ QRS*/
router.get("/migrate-merchant-data", readMerchantData)

/* @GET
Search rawString on All_QRS*/
router.post("/search-rawstring", searchRawString)

module.exports = router;

