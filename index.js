import express from "express";
import userRouter from "./routes/userRouter.js";
import error from "./service/error.js";
import connectDB from "./db/connection.js";
const app = express();

app.use(express.json());
app.use("/api",userRouter);
app.use(error);
connectDB.then((result)=>{
    app.listen(3000,()=>{
        console.log(`server is running on 3000`);
    })
}).catch((err)=>{
    console.log(`${err} error in connecting to the database`);
})