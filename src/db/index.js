import mongoose from "mongoose";

const mongoConnect = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGO_DB_URL}/${process.env.MONGO_DB_NAME}`,
    );
    console.log(
      `\nMongoDB Connected - Database Ready at ${connectionInstance.connection.host}`,
    );
  } catch (error) {
    console.log(`MongoDB connection Failed: ${error}`);
  }
};

export default mongoConnect
