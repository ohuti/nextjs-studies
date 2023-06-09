import mongoose from 'mongoose'

let isConnected = false

export const connectToDB = async () => {
    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log('MongoDB already connected...')
        return
    }

    try {
        await mongoose.connect(process.env.MONGODB_URI as string, {
            dbName: 'share_prompt'
        })

        isConnected = true

        console.log('Connected successfully to MongoDB...')
    } catch (error) {
        console.error(error)
    }
}
