import  express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
import authRoute from "./Routes/auth.js";
import userRoute from "./Routes/user.js"


const app = express();
dotenv.config();

mongoose.set('strictQuery',false);

const connect = async()=>{
    try{
     await mongoose.connect(process.env.MONGO)
    }catch(error){
      throw(error)
    }
}



mongoose.connection.on("disconnected",()=>{
    console.log("mongoDB disconnected")
})

mongoose.connection.on("connected",()=>{
    console.log("mongoDB connected")
});

app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute)


//error handlers 
app.use((err, req,res,next)=>{
  const status =err.status || 500;
  const message = err.message || "Someting is wrong";
  return res.status(status).json({
    success:false,
    status,
    message,
  })
})

app.listen(3000,()=>{
    connect();
    console.log("server started at port 8080")
})
