import mongoose from "mongoose";
<<<<<<< HEAD
const connectDB = mongoose.connect("mongodb://127.0.0.1:27017/urbanHarmony").then((result)=>{
    console.log("success");
}).catch((err)=>{
    console.log("error",err);
=======
const connectDB=mongoose.connect("mongodb://127.0.0.1:27017/urbanHarmony").then((resp)=>{
    console.log("Connected")
}).catch((err)=>{
    console.log(`${err} error connecting`);
>>>>>>> refs/remotes/origin/main
});
export default connectDB;