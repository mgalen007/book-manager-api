import express from 'express'
import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'
import errorHandler from './middleware/error.middleware.js'
import { connectDB } from './config/db.js'
import booksRouter from './routes/books.routes.js'

const app = express()
await connectDB()

app.use(express.json({ limit: '10kb' }))
app.use(cors())
app.use(morgan('dev'))
app.use(helmet())

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