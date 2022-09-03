const config = require("../utils/config")
const sdk = require("api")('@cashfreedocs-new/v2#ebj9bj1sl1asf5c6');
const { v4: uuidv4 } = require('uuid');

exports.merchant_payment = (req,res)=>{
  const {customer_id,customer_email,customer_phone,order_amount,order_id,order_note} = req.body;
  sdk.server('https://api.cashfree.com/pg');
  sdk.CreateOrder({
    customer_details: {
      customer_id: customer_id,
      customer_email: customer_email,
      customer_phone: customer_phone,
    },
    order_meta: {
      return_url: 'https://b8af79f41056.eu.ngrok.io?order_id={order_id}&order_token={order_token}',
      notify_url: 'https://b8af79f41056.eu.ngrok.io/webhook.php'
    },
    order_tags: {type: 'Merchant'},
    order_amount: order_amount,
    order_id: order_id,
    order_currency: 'INR',
    order_note: order_note,
  }, {
    'x-client-id': config.APP_CLIENT_ID,
    'x-client-secret': config.SECRET_KEY,
    'x-api-version': config.API_VERSION,
  })
    .then((response)=>{
      return res.status(200).json({response});
    })
    .catch((error)=>{
      return res.status(error.status).json({error});
    });
}