const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const routes = require("./routes");
const dotenv = require("dotenv");
const cors = require("cors");
const footerRouter = require("./router/footerRouter");

dotenv.config();

const PORT = process.env.PORT;
const VERSION = "0.1.0";

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


//footer 
app.post(routes.addAdInquiry, footerRouter);

app.listen(PORT, () => {
  console.log(`✅ REST API NODE SERVER START :: PORT NUMBER ${PORT}`);
  console.log(`DEVELOP BY [🍀4LEAF SOFTWARE]`);
  console.log(`VERSION : ${VERSION}`);
});