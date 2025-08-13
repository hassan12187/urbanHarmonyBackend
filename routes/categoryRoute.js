import { Router } from "express";
import { getCategories,addCategory,editCategory,deleteCategory } from "../controllers/categoryController.js";
const router=Router();
router.get("/",getCategories);
router.post("/",addCategory);
router.patch("/:cid",editCategory);
router.delete("/:cid",deleteCategory);
export default router;