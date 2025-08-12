import { Router } from "express";
import { getCategories } from "../controllers/categoryController.js";
import { editProduct, getAllProducts,getProduct } from "../controllers/productController.js";

const router = Router();
router.get("/categories",getCategories);
router.get("/product",getAllProducts);
router.patch("/product/:pid",editProduct);
export default router