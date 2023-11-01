import mongoose from 'mongoose';
import asyncHandler from 'express-async-handler';


export const mongoDb = asyncHandler(async () => {
  try {
    const connection = await mongoose.connect('mongodb+srv://kennie:869480Ak@cluster0.zkjbfkp.mongodb.net/noteapi?retryWrites=true&w=majority', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`Connected to Database!! ${connection.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
});
