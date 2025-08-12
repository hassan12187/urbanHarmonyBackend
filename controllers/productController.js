import productModel from "../models/productModel.js";

export const getAllProducts=async(req,res)=>{
    try {
        const result = await productModel.find().populate("category");
        return res.status(200).send(result);
    } catch (error) {
       return res.send({status:400,message:"Error in getting all products"}); 
    }
}
export const getProduct=async(req,res)=>{
    try {
        const pid = req.params.pid;
        const result = await productModel.findOne({_id:pid}).populate("category");
        if(result) return res.status(200).send(result);
        return res.status(400).send("Did not get a Product");
    } catch (error) {
       return res.send({status:400,message:"Error in getting a product"}); 
    }
}
export const addProduct=async(req,res)=>{
    try {
        const {title,description,price,image,categoryID}=req.body;
        const result = await productModel.insertOne({title,description,price,brand,image,categoryID});
        if(result)return res.status(200).send("Successfully added a Product");
        return res.status(400).send("Error Adding Product Please Try Again.");
    } catch (error) {
        return res.status(400).send("Error in adding product");
    }
}
export const editProduct=async(req,res)=>{
    try {
        const productID = req.params.pid;
        const {title,description,price,brand,category,image}=req.body;
        const result = await productModel.updateOne({_id:productID},{$set:{title,description,price,brand,category}});
        if(result)return res.status(200).send("Product Updated");
        return res.status(400).send("Product Not Updated");
    } catch (error) {
        return res.status(400).send("Error in Editing Product");
    }
}
export const ActiveOrDeactiveProduct=async(req,res)=>{
    try {
        const {status}=req.body;
        const pid = req.params.pid;
        const result = await productModel.findOneAndUpdate({_id:pid},{$set:{status}});
        if(result)return res.status(200).send("Successfully Updated");
        return res.status(400).send("Not Updated");
    } catch (error) {
        return res.status(400).send("Error in deactivating product");
    }
}
export const deleteProduct=async(req,res)=>{
    try {
        const pid = req.params.pid;
        const result = await productModel.deleteOne({_id:pid});
        if(result)return res.status(200).send("Successfully Deleted");
        return res.status(400).send("Not Deleted");   
    } catch (error) {
        return res.status(400).send("Error in deactivating product");
    }
}