import mongoose from "mongoose";
const MONGODB_URI = process.env.MONGODB_URI;
export const connectToDatabase = async () => {
  if (!MONGODB_URI) throw new Error("MONGODB_URI must be set within .env");

  try {
    await mongoose.connect(MONGODB_URI);
    console.log(
      `Connected to database ${process.env.NODE_ENV} - ${MONGODB_URI}`
    );
  } catch (error) {
    console.error(error);
  }
};
