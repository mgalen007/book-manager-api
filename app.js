import express from 'express'
import cors from 'cors'
import logger from './middleware/logger.middleware.js'
import errorHandler from './middleware/error.middleware.js'
import { connectDB } from './config/db.js'
import booksRouter from './routes/books.routes.js'

const app = express()
await connectDB()

app.use(express.json())
app.use(cors())
app.use(logger)

app.get('/api/health', (req, res) => {
    res.status(200).json({
        status: 'OK',
        name: 'Book management API'
    })
})

app.use('/api/books', booksRouter)

app.use(errorHandler)

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: 'Resource not found'
    })
})

export default app