import express from 'express'
import dotenv from 'dotenv'
import colors from 'colors'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'

import connectDB from './config/db.js'

import productRoutes from './routes/productRoute.js'
import userRoute from './routes/userRoute.js'

dotenv.config()

connectDB()

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
    res.send('API is running')
})
app.use('/api/products', productRoutes)
app.use('/api/users', userRoute)

//error handling for 404
app.use(notFound)

//eror handling for 500
app.use(errorHandler)

const PORT = process.env.PORT || 4000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold))