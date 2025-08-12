import express from "express";
import userRouter from "./routes/userRouter.js";
import error from "./service/error.js";
import connectDB from "./db/connection.js";
<<<<<<< HEAD
=======

>>>>>>> refs/remotes/origin/main
const app = express();

app.use(express.json());
<<<<<<< HEAD


app.use("/api",HomeOwnerRouter,error)
// app.use(error);
connectDB.then(()=>{

=======
app.use("/api",userRouter);
app.use(error);
connectDB.then((result)=>{
>>>>>>> refs/remotes/origin/main
    app.listen(3000,()=>{
        console.log(`server is running on 3000`);
    })
}).catch((err)=>{
<<<<<<< HEAD
    console.log("error on connecting: ",err);
=======
    console.log(`${err} error in connecting to the database`);
>>>>>>> refs/remotes/origin/main
})