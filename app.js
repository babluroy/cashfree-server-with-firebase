const express = require("express")
const bodyParser = require('body-parser')
const cors = require("cors");
const app = express();
const admin = require("firebase-admin");
const serviceAccount = require("./utils/firebaseServiceAccountKey.json");
const config = require("./utils/config")
require("dotenv").config();
const port = process.env.PORT || 2000;

// initialize firebase
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "YOUR_DATABASE_URL"
 });

// routes path
const merchantPayments = require("./routes/merchant_payment")
const sms = require("./routes/sms")
const firebase_crud = require("./routes/firebase_crud")

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))



// routes
app.use("/api", merchantPayments);
app.use("/api", sms);
app.use("/api", firebase_crud);

// starting the server
app.listen(port,()=>{
    console.log(`Server is running at port ${port}`)
})