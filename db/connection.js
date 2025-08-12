import mongoose from "mongoose";
const connectDB=mongoose.connect("mongodb://127.0.0.1:27017/urbanHarmony").then((resp)=>{
    console.log("Connected")
}).catch((err)=>{
    console.log(`${err} error connecting`);
});
export default connectDB;