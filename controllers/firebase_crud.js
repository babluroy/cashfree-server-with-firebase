const admin = require("firebase-admin");
const db = admin.database();
const merchant_data_ref = db.ref("Merchant_data");
const ref_All_QRS = db.ref('All_QRS/');
const ref_All_QRS_NEW = db.ref('All_QRS/');

let dataArr = [];

 exports.readMerchantData = (req,res) => { 
    merchant_data_ref.once("value", (userSnapshot) => {
        userSnapshot.forEach((userSnapshot) => {
          const userUid = userSnapshot.key;
           userSnapshot.child("Payment_Information").forEach((data) => {                                                                
             dataArr.push(
                {
                  rawString: data.val().rawString,
                  primary:  data.val().primary,
                  uid: userUid,
                }
             )
        });                         
     });
  }).then((result) => {
     addMerchantRawString();
  }) 
};


const addMerchantRawString = () => {
    dataArr.map((value,i) => {
        const usersRef = ref_All_QRS.child(i);
        usersRef.set({
            rawString: value.rawString,
            primary: value.primary,
            uid: value.uid,
        }).then((res)=>{
            return true;
        }).catch((err)=>{
            return false;
        });
    })
    return true;
}


exports.searchRawString = (req, res) => {
  const {rawString} = req.body;
  ref_All_QRS_NEW.orderByChild("rawString").equalTo(rawString).once("value", snapshot => {
    if (snapshot.exists()){
     const data = snapshot.val();
     let response_obj= data[Object.keys(data)[0]];
      return res.status(200).json({
        exists: true,
        response: response_obj,
      })
    } else {
      return res.status(404).json({
        exists: false,
        response: null,
      })
    }
  });
}