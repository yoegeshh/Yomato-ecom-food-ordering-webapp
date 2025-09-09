import mongoose from "mongoose";

export const connectDB = async ()=>{
     await mongoose.connect('mongodb+srv://yoegeshkainbox:9852173489@cluster0.uxhwpzj.mongodb.net/yomato').then(()=>console.log("DB Connected"));

}