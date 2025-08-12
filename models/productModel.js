import { Schema,model } from "mongoose";

const productSchema=new Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    price:{type:Number},
    brand:{
        type:String
    },
    category:{
        type:Schema.Types.ObjectId,
        require:true,
        ref:"Category"
    }
});
const productModel=model("Product",productSchema);
export default productModel;