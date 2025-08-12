import { Schema,model } from "mongoose";
const categorySchema=new Schema({
    categoryName:{
        type:String
    }
});
const categoryModel=model("Category",categorySchema);
export default categoryModel;