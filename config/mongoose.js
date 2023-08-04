const mongoose = require("mongoose");

const connectDB = async () => {
   try {
      // console.log("dfsfsfs ",process.env.MONGO_URI)
      const conn = await mongoose.connect('mongodb+srv://shrutimishra7800:shruti123456@cluster0.lnibqin.mongodb.net/?retryWrites=true&w=majority');

      console.log(`                                 MongoDB Connection Established      \n`);
   } catch (error) {
      console.log(error);
      process.exit(1);
   }
};

module.exports = connectDB;
