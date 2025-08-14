import productModel from "../models/productModel.js";
import { setLimitProductCache ,getLimitedProductFromCache, getProductsCache, setProductsCache} from "../service/cacheService.js";

export const getAllProducts=async(req,res)=>{
    try {
        const limit = req.query.limit;
        if(limit > 0){
            const limitedCachedData=await getLimitedProductFromCache();
            console.log(limitedCachedData);
            if(limitedCachedData != undefined){
                console.log("here is here");
                return res.send({status:200,message:limitedCachedData});
            }
            const products = await productModel.find().limit(5).populate("category");
            console.log("the products: ",products);
            await setLimitProductCache(products)
            return res.send({status:200,message:products});
        }
        const productFromCache=await getProductsCache();
        console.log("the result is: ",productFromCache);
        if(productFromCache != undefined)return res.send({status:200,message:productFromCache});
        const result = await productModel.find().limit(15).populate("category");
        await setProductsCache(result);
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
        const {title,description,price,brand,category}=req.body;
        const result = await productModel.insertOne({title,description,price,brand,category});
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