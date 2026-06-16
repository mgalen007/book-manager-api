import AppError from '../custom/app.error.js'

const errorHandler = (err, req, res, next) => {
    console.error(err)
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        })
    }
    res.status(500).json({
        success: false,
        message: 'An error occured, try again later'
    })
}

export default errorHandler