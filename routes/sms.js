var express = require("express");
var router = express.Router();
const {check_balance,sms_campaign_conformation,campaign_send,welcome_message,marketing_message} = require("../controllers/sms")

/* @GET 
CHECK SMS API BALANCE */
router.get("/check-balance", check_balance)

/* @POST
CAMPAIGN REQUEST CONFORMATION SMS TO MERCHANT */
router.post("/campaign-conformation", sms_campaign_conformation)

/* @POST
CAMPAIGN LIVE MESSAGE TO MERCHANT*/
router.post("/campaign-send", campaign_send)

/* @POST
WELCOME MESSAGE TO MERCHANT*/
router.post("/welcome-message", welcome_message)

/* @POST
MARKEING MESSAGE TO Customers*/
router.post("/marketing-message", marketing_message)

module.exports = router;