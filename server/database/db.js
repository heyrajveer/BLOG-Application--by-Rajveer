import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const Connection = async () => {
    const URL = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vp1wpws.mongodb.net/BLOG?retryWrites=true&w=majority&appName=Cluster0`;
    
    try {
        await mongoose.connect(URL);
        console.log('✅ MongoDB connected');
    } catch (error) {
        console.log('❌ Error while connecting to the database', error);
    }
};

export default Connection;
