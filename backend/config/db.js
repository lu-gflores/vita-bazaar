import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDb connected: ${conn.connection.host}`)
    } catch (error) {
        console.error(`Error: ${error.mongoose}`)
        process.exit(1)
    }
}

export default connectDB