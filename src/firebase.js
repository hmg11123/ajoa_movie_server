const firebase = require("firebase/app");
require("firebase/firestore");
const dotenv = require("dotenv");

dotenv.config();

const config = {
  apiKey: process.env.APP_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  databaseURL: process.env.DB_URL,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STBUCKET,
  messagingSenderId: process.env.MSID,
  appId: process.env.APP_ID,
  measurementId: process.env.MEASURE,
};

firebase.initializeApp(config);

const firestore = new firebase.firestore();

module.exports = firestore;
