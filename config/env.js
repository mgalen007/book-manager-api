import dotenv from 'dotenv'

dotenv.config()

const { PORT, MONGODB_URI } = process.env

if (!PORT) throw new Error("PORT is undefined")
if (!MONGODB_URI) throw new Error("MONGODB_URI is undefined")

export { PORT, MONGODB_URI }