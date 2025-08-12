import { Schema,model } from "mongoose";
const designersSchema=new Schema({
    UserID:{
        type:Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
    FullName:{
        type:String
    },
    YearsOfExperience:{type:Number},
    Specialization:{
        type:String
    }
});
const designersModel=model("Designer",designersSchema);
export default designersModel;