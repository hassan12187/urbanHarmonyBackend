import express from "express"
import HomeOwnerRouter from "./routes/HomeOwnerRouter.js";
import error from "./service/error.js";
const app = express();
app.use(express.json());


app.use("/api",HomeOwnerRouter)
app.use(error);
app.listen(3000,()=>{
    console.log(`server is running on 3000`);
})