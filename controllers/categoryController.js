import categoryModel from "../models/categoryModel";

export const getCategories=async(req,res)=>{
    try {
        const categories = await categoryModel.find();
        return res.status(200).send(categories);
    } catch (error) {
        return res.status(400).send("Error Getting Categories");
    }
}