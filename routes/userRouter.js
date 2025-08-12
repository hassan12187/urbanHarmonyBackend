import { Router } from "express";
import { addUser, getHomeOnwers } from "../controllers/userController.js";
import {login,register} from "../service/login.js";
const router = Router();
router.get("/",getHomeOnwers);
router.post("/",addUser);
router.post("/login",login);
router.post('/register',register);
export default router