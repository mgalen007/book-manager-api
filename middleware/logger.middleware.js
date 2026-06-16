
const logger = (req, res, next) => {
    const { ip, url, method } = req
    const timestamp = new Date().toLocaleTimeString()
    console.log(`[${timestamp}] ${method} ${url} FROM ${ip}`)
    next()
}

export default logger