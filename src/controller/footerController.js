const firestore = require("../firebase");

const addAdInquiry = async(req, res) => {
    const {
        body: {
          params: { inputData },
        },
      } = req;
    
      let resultCode = 0;

    try {
        await firestore
            .collection("adInquiry")
            .add({
                companyName: inputData.companyName,
                desc: inputData.desc,
                email: inputData.email,
                manager: inputData.manager,
                mobile: inputData.mobile
            })
        resultCode = 1;
    }catch(e){
        console.log(e)
    }

    return res.json(resultCode);
}

const footerController = {
    addAdInquiry
};

module.exports = footerController;