import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log('MongoDB Connected'))
        .catch(() => console.log('Database connection error'))
}


export default connectDB