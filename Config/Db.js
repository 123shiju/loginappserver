const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose
      .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        ssl: true,
      })
      .then(() => console.log("Database is connected"));
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
