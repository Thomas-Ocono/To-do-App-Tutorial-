import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connect to DB");
  } catch (error) {
    console.log("Error connecting to DB");
    process.exit(1); //exit with failure
  }
};
