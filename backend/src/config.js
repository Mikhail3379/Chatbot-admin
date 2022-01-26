

const path = require('path');
const mongoose = require("mongoose");
const dotenv = require('dotenv');

const db = mongoose.connection;
dotenv.config({
  path: path.resolve(__dirname, process.env.NODE_ENV + '.env')
});
console.log("env=>" + process.env.NODE_ENV)


//mongoose.connect("mongodb+srv://" + process.env.USERNAME + ":" + process.env.PASSWORD + "@" + process.env.CLUSTER + ".mongodb.net/" + process.env.DBNAME);

mongoose.connect("mongodb://127.0.0.1:27017/"+process.env.DBNAME)

console.log(process.env.DBNAME)

db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("DB Connected successfully");
});





