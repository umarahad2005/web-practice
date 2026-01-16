import mongoose from "mongoose";

const connection = ()=>{
    try {
mongoose.connect('')
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