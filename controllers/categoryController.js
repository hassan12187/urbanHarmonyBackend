import categoryModel from "../models/categoryModel.js";

export const getCategories=async(req,res)=>{
    try {
        const categories = await categoryModel.find();
        return res.status(200).send(categories);
    } catch (error) {
        return res.status(400).send("Error Getting Categories");
    }
}
export const addCategory=async(req,res)=>{
    try {
        const {categoryName}=req.body;
        const result = await categoryModel.insertOne({categoryName});
        if(result)return res.status(200).send("Successfully added a Category");
        return res.status(400).send("Error Adding Category Please Try Again.");
    } catch (error) {
        return res.status(400).send("Error in adding Category");
    }
}
export const editCategory=async(req,res)=>{
    try {
        const catID = req.params.cid;
        const {categoryName}=req.body;
        const result = await categoryModel.updateOne({_id:catID},{$set:{categoryName}});
        if(result)return res.status(200).send("Category Updated");
        return res.status(400).send("Category Not Updated");
    } catch (error) {
        return res.status(400).send("Error in Editing Category");
    }
}
export const ActiveOrDeactiveCategory=async(req,res)=>{
    try {
        const {status}=req.body;
        const cid = req.params.cid;
        const result = await categoryModel.findOneAndUpdate({_id:cid},{$set:{status}});
        if(result)return res.status(200).send("Successfully Updated");
        return res.status(400).send("Not Updated");
    } catch (error) {
        return res.status(400).send("Error in deactivating product");
    }
}