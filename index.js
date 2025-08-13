import express from "express";
import userRouter from "./routes/userRouter.js";
import error from "./service/error.js";
import connectDB from "./db/connection.js";
import staticRoutes from "./routes/staticRoutes.js";
import categoryRoute from "./routes/categoryRoute.js";
import {config} from "dotenv";
import { checkRoleForAdmin } from "./middlewares/checkRole.js";
import adminRoute from "./routes/adminRoute.js";
const app = express();
config();
app.use(express.json());
app.use("/static",staticRoutes);
app.use("/api",userRouter);
app.use("/api/category",checkRoleForAdmin,categoryRoute);
app.use("/api/admin",checkRoleForAdmin,adminRoute)
// app.use(error);
connectDB.then((result)=>{
    app.listen(3000,()=>{
        console.log(`server is running on 3000`);
    })
}).catch((err)=>{
    console.log(`${err} error in connecting to the database`);
})