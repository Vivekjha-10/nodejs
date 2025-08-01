import mongoose from 'mongoose';
import 'dotenv/config';


// const mongoURL =  'mongodb://localhost:27017/hotels'
// const mongoURL = 'mongodb+srv://movieticket:Vivek123@cluster0.rnq7271.mongodb.net/'
const mongoURL = process.env.MONGO_URI; 

mongoose.connect(mongoURL,{
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const db = mongoose.connection;
 
db.on('connected', () => {
    console.log('Connected to MongoDB server');
});

db.on('error', (err) => {
    console.log('MongoDB connection error:',err);
});

db.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

export default db;
