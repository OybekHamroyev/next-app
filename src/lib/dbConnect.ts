import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) throw new Error("MONGODB_URI is not defined");

let isConnected = false;

export async function dbConnect() {
  if (isConnected) return;

  if (mongoose.connection.readyState >= 1) {
    isConnected = true;
    console.log("salommm");
    return;
  }

  await mongoose.connect(MONGODB_URI);
  isConnected = true;
}
