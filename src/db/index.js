import mongoose from "mongoose";
import { DB_NAME } from '../constants.js'

const connectDB = async() => {
    try {
        const connectInstance = await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`)
        console.log(`\nMongoDB is connected!! ${connectInstance.connection.host}`)
    } catch (error) {
        console.log("MongoDB connection Failed");
        throw error
    }
}

export default connectDB;