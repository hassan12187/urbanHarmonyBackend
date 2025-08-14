import categoryModel from "../models/categoryModel.js";

export const getCategories=async(req,res)=>{
    try {
        const categories = await categoryModel.find();
        return res.send({status:200,message:categories});
    } catch (error) {
        return res.send({status:400,message:"Error Getting Categories"});
    }
}
export const addCategory=async(req,res)=>{
    try {
        const {categoryName}=req.body;
        const result = await categoryModel.insertOne({categoryName});
        if(result)return res.send({status:200,message:"Successfully added a Category"});
        return res.send({status:400,message:"Error Adding Category Please Try Again."});
    } catch (error) {
        return res.send({status:400,message:"Error in adding Category"});
    }
}
export const editCategory=async(req,res)=>{
    try {
        const catID = req.params.cid;
        const {categoryName,categoryStatus}=req.body;
        const result = await categoryModel.updateOne({_id:catID},{$set:{categoryName,categoryStatus}});
        if(result)return res.send({status:200,message:"Category Updated"});
        return res.send({status:400,message:"Category Not Updated"});
    } catch (error) {
        return res.send({status:400,message:"Error in Editing Category"});
    }
}
export const deleteCategory=async(req,res)=>{
    try {
        const catID = req.params.cid;
        const result = await categoryModel.deleteOne({_id:catID});
        if(result)return res.send({status:200,message:"Category Deleted"});
        return res.send({status:400,message:"Category Not Deleted"});
    } catch (error) {
        return res.send({status:400,message:"Error in Deleting Category"});
    }
}