import mongoose from "mongoose";
const connectDB = mongoose.connect("mongodb://127.0.0.1:27017/urbanHarmony").then((result)=>{
    console.log("success");
}).catch((err)=>{
    console.log("error",err);
});
export default connectDB;