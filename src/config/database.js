import mongoose from 'mongoose'
import { config } from 'dotenv'
config()

try {
    const db = mongoose.connect(process.env.MONGODB_URI)
    console.log('Connected to', db.connection.name)
} catch (error) {
    console.log(error)
}