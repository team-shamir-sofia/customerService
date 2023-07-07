
// const mongoose = require("mongoose");
// const db = mongoose.connect(
//   "mongodb+srv://sofiailiana:sofia@cluster0.z3lhgfp.mongodb.net/customerService?retryWrites=true&w=majority"
// );

// module.exports = db;


const mongoose = require("mongoose");


const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const db = mongoose.connect("mongodb+srv://shamiroomar:shamiro43@cluster0.kbkujwz.mongodb.net/customerService?retryWrites=true&w=majority", connectionParams).then(() => {
  console.log(`Connected to database`);
})
.catch(err => console.log("Error connecting to the database", err))

module.exports = db


