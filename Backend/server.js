import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';



//config 
const app=express();
const port=4000;

//middleware
app.use(express.json());
app.use(cors());

//db connection
connectDB();

//api endpoints
app.use("/api/food",foodRouter)

app.get("/",(req,res)=>{
    res.send("API WOrking")
})

app.listen(port,()=>{
    console.log(`Server started on http://localhost:${port}`);
})

