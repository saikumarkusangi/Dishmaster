import mongoose from 'mongoose';
import { configDotenv } from 'dotenv';
configDotenv()

const dbConnection = async (io) => {
    try {
        console.log('Trying to connect to Database....');
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        mongoose.connection.on('error', (err) => {
			console.log('Database connection error');
			console.log(err);
		});
		mongoose.connection.on('disconnected', (err) => {
			console.log('Database disconnected');
			console.log(err);
		});
       
        console.log('Connected to Database ✅');
    } catch (error) {
        console.error('Error connecting to Database ❌:', error);
        process.exit(1);
    }
};

export default dbConnection;
