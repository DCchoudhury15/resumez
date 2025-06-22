import mongoose from "mongoose";

export const connectDB = async()=>{
    await mongoose.connect('mongodb+srv://divyanshuchoudhury51:resumez123@cluster0.7gwrmcb.mongodb.net/RESUMEZ')
    .then(()=> console.log('DB CONNECTED'))
}