import { Router } from "express";
import { getCategories } from "../controllers/categoryController.js";
import { ActiveOrDeactiveProduct, addProduct, deleteProduct, editProduct, getAllProducts,getProduct } from "../controllers/productController.js";
import { checkRoleForDesigner } from "../middlewares/checkRole.js";

const router = Router();
router.get("/categories",getCategories);
router.get("/product",getAllProducts);
router.post("/product",addProduct);
router.patch("/product/:pid",checkRoleForDesigner,editProduct);
router.delete("/product/:pid",checkRoleForDesigner,deleteProduct);
router.put("/product/:pid",checkRoleForDesigner,ActiveOrDeactiveProduct);
export default router