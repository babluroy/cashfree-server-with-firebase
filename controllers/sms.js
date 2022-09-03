const config = require("../utils/config")
const { v4: uuidv4 } = require('uuid');
const axios = require('axios').default;

const SmsApi = config.SMS_API
const userName = config.SMS_USERNAME;
const password = config.SMS_PASSWORD;
const authentic_key = config.AUTHENTIC_KEY;
const sender_id = config.SENDER_ID;

const sms_campaign_conformation_template_id = "1607100000000209942";
const sms_campaign_live_template_id = "1607100000000209939";
const sms_welcome_template_id = "1607100000000210205";
const sms_marketing_message_template_id = "1607100000000210369";

exports.check_balance = (req,res)=>{
  axios.get(`${SmsApi}/http-credit.php?username=${userName}&password=${password}&route_id=06`)
   .then((response) => {
    let resData = response.data
    return res.status(200).json({resData})
 }).catch( (error) => {
    return res.status(400).json({error})
 })}


 exports.sms_campaign_conformation = (req,res) => {
   const {phoneNumber, textOne, textTwo} = req.body;
   axios.post(`http://sms.smsindori.com/http-tokenkeyapi.php?authentic-key=${authentic_key}&senderid=${sender_id}&route=06&number=${phoneNumber}&message=Hi%20Gastos%20Provider!%20${textOne}%20has%20been%20submitted%20and%20will%20be%20${textTwo}.%20Please%20wait%20while%20it%20is%20approved%20Thank%20you%20for%20using%20GASTOS.&templateid=${sms_campaign_conformation_template_id}`)
    .then((response) => {
    let resData = response.data
    return res.status(200).json({resData})
 }).catch( (error) => {
    return res.status(400).json({error})
 })
}


exports.campaign_send = (req,res) => {
   const {phoneNumber, textOne, textTwo} = req.body;
   axios.post(`http://sms.smsindori.com/http-tokenkeyapi.php?authentic-key=${authentic_key}&senderid=${sender_id}&route=06&number=${phoneNumber}&message=Hi%20Gastos%20Provider!%20${textOne}%20is%20now%20live%20and%20SMS%20has%20been%20sent%20to%20${textTwo}.%20Thank%20you%20for%20using%20GASTOS.&templateid=${sms_campaign_live_template_id}`)
    .then((response) => {
    let resData = response.data
    return res.status(200).json({resData})
 }).catch( (error) => {
    return res.status(400).json({error})
 })
}

exports.welcome_message = (req,res) => {
   const {phoneNumber, textOne, textTwo} = req.body;
   axios.post(`http://sms.smsindori.com/http-tokenkeyapi.php?authentic-key=${authentic_key}&senderid=${sender_id}&route=06&number=${phoneNumber}&message=Welcome%20to%20Gastos%20Provider%20Club!%20Now%20you%20can%20attract%20${textOne}%20your%20profile%20is%20now%20active%20and%20you%20can%20avail%20our%20${textTwo}%20GASTOS.&templateid=${sms_welcome_template_id}`)
    .then((response) => {
    let resData = response.data
    return res.status(200).json({resData})
 }).catch( (error) => {
    return res.status(400).json({error})
 })
}

exports.marketing_message = (req,res) => {
   const {phoneNumber, textOne, textTwo} = req.body;
   axios.post(`http://sms.smsindori.com/http-tokenkeyapi.php?authentic-key=${authentic_key}&senderid=${sender_id}&route=06&number=${phoneNumber}&message=Hi%20Gastos%20Member%20${textOne}%20at%20Gastos%20Provider%20with%20a%20minimum%20bill%20amount%20${textTwo}%20%23PAYLESS%20WITH%20GASTOS%20PRIVATE%20LIMITED%21&templateid=${sms_marketing_message_template_id}`)
    .then((response) => {
    let resData = response.data
    return res.status(200).json({resData})
 }).catch( (error) => {
    return res.status(400).json({error})
 })
}