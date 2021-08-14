import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MANGO_DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MangoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error in DB: ${error.message}`.red);
  }
};

export default connectDB;
