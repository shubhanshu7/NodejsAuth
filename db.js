const Mongoose = require("mongoose");

const localDB = `mongodb://127.0.0.1:27017/role_auth`;
// mongodb://localhost:27017
const connectDB = async () => {
  await Mongoose.connect(localDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  console.log("MongoDB Connected");
};

module.exports = connectDB;
