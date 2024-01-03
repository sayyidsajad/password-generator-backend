require("dotenv").config();
const dbConnect = require("./config/db.config");
const genRoute = require("./routes/generator-route");
const express = require("express");
const cors = require('cors');
const app = express();
dbConnect();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/public"));

const PORT = 3000;

app.use(cors());
app.use("/", genRoute);
app.listen(process.env.PORT || PORT, () => {
  console.log(`Server is running on PORT http://localhost:${PORT}`);
});
