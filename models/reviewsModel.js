import {Schema,model} from "mongoose";
const reviewsSchema=new Schema({
    UserID:{
        type:Schema.Types.ObjectId,
        ref:"User",
        require:true
    },
    ProductID:{
        type:Schema.Types.ObjectId,
        ref:"Product",
        require:true
    },
    DesignerID:{
        type:Schema.Types.ObjectId,
        ref:"Designer",
        require:true
    },
    Comment:{type:String}
});
const reviewsModel=model("reviews",reviewsSchema);
export default reviewsModel;