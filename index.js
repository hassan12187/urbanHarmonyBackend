import express from "express"
import HomeOwnerRouter from "./routes/HomeOwnerRouter.js";
import error from "./service/error.js";
import connectDB from "./db/connection.js";
const app = express();
app.use(express.json());


app.use("/api",HomeOwnerRouter,error)
// app.use(error);
connectDB.then(()=>{

    app.listen(3000,()=>{
        console.log(`server is running on 3000`);
    })
}).catch((err)=>{
    console.log("error on connecting: ",err);
})