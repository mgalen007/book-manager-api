import mongoose from 'mongoose'
import { MONGODB_URI } from './env.js'

export const connectDB = async () => {
    try {
        await mongoose.connect(MONGODB_URI)
        console.log('DB connected successfully')
    } catch(err) {
        throw new Error("Failed to connect DB")
    }
}