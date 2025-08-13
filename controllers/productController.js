import productModel from "../models/productModel.js";

export const getAllProducts=async(req,res)=>{
    try {
        const result = await productModel.find().populate("category");
        return res.send({status:200,message:result});
    } catch (error) {
       return res.send({status:400,message:"Error in getting all products"}); 
    }
}
export const getProduct=async(req,res)=>{
    try {
        const pid = req.params.pid;
        const result = await productModel.findOne({_id:pid}).populate("category");
        if(result) return res.send({status:200,message:result});
        return res.send({status:400,message:"Did not get a Product"});
    } catch (error) {
       return res.send({status:400,message:"Error in getting a product"}); 
    }
}
export const addProduct=async(req,res)=>{
    try {
        const {title,description,price,image,categoryID}=req.body;
        const result = await productModel.insertOne({title,description,price,brand,image,categoryID});
        if(result)return res.send({status:200,message:"Successfully added a Product"});
        return res.send({status:400,message:"Error Adding Product Please Try Again."});
    } catch (error) {
        return res.send({status:400,message:"Error in adding product"});
    }
}
export const editProduct=async(req,res)=>{
    try {
        const productID = req.params.pid;
        const {title,description,price,brand,category,image}=req.body;
        const result = await productModel.updateOne({_id:productID},{$set:{title,description,price,brand,category}});
        if(result)return res.send({status:200,message:"Product Updated"});
        return res.send({status:400,message:"Product Not Updated"});
    } catch (error) {
        return res.send({status:400,message:"Error in Editing Product"});
    }
}
export const ActiveOrDeactiveProduct=async(req,res)=>{
    try {
        const {status}=req.body;
        const pid = req.params.pid;
        const result = await productModel.findOneAndUpdate({_id:pid},{$set:{status}});
        if(result)return res.send({status:200,message:"Successfully Updated"});
        return res.send({status:400,message:"Not Updated"});
    } catch (error) {
        return res.send({status:400,message:"Error in deactivating product"});
    }
}
export const deleteProduct=async(req,res)=>{
    try {
        const pid = req.params.pid;
        const result = await productModel.deleteOne({_id:pid});
        if(result)return res.send({status:200,message:"Successfully Deleted"});
        return res.send({status:400,message:"Not Deleted"})  
    } catch (error) {
        return res.send({status:400,message:"Error in deactivating product"});
    }
}