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
    image:{
        type:[String],
        default:[]
    },
    category:{
        type:Schema.Types.ObjectId,
        require:true,
        ref:"Category"
    },
    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
    }
});
const productModel=model("Product",productSchema);
export default productModel;