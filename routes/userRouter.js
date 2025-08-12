import { Router } from "express";
import { addUser } from "../controllers/userController.js";
import {login,register} from "../service/login.js";
import { getCategories } from "../controllers/categoryController.js";
import { getProducts } from "../controllers/productController.js";

const router = Router();
router.post("/",addUser);
router.post("/login",login);
router.post('/register',register);
router.get("/categories",getCategories);
router.get("/products",getProducts);
export default router