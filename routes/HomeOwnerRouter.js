import { Router } from "express";
import { addUser, getHomeOnwers } from "../controllers/HomeOwnerController.js";
import login from "../service/login.js";
const router = Router();
router.get("/",getHomeOnwers);
router.post("/login",login);
router.post("/",addUser);
export default router