import mongoose from "mongoose";

const connection = ()=>{
    try {
mongoose.connect('mongodb+srv://umarahadusmani_db_user:HdPXqOQ2Aa03P7qY@webpractice.3zg1b4d.mongodb.net/umarahadusmani_db')
    .then(() => {
        console.log(' MongoDB connected successfully!');
    })
    .catch((err) => {
        console.error('MongoDB connection error:', `error is ${err.message}`);    
    });
} catch (error) {
    console.error('Unexpected error during MongoDB connection:', error);
}
};

export default connection;