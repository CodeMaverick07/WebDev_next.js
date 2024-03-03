import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () => {
  mongoose.set("strictQuery", true);
  if (!process.env.MONGODB_URL) {
    return console.log("MONGO_URL not found");
  }
  if (isConnected) {
    return console.log("already connected to database");
  }
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      dbName: "dev_overflow",
    });
    isConnected = true;
    console.log("connected to database");
  } catch (error) {
    console.log("error connecting to database", error);
  }
};
