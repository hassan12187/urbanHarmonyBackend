import { Router } from "express";
import { getHomeOnwers } from "../controllers/HomeOwnerController.js";
import login from "../service/login.js";
const router = Router();
router.get("/",getHomeOnwers);
router.post("/login",login);
export default router