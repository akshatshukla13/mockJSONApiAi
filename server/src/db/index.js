import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(process.env.MONGODB_URI);
    console.log("connected to : ", connectionInstance.connection.host);
  } catch (error) {
    console.log("Failed : ", error);
    process.exit();
  }
};

export default connectDB;
