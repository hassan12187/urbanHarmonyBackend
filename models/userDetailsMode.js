import {Schema,model} from "mongoose";
const userDetailsSchema=new Schema({
    UserID:{
        type:Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
    FirstName:{
        type:String
    },
    LastName:{
        type:String
    },
    Adress:{
        type:String
    },
    City:{
        type:String
    },
    ContactNumber:{
        type:Number,
        maxlength:15
    }
});
const userDetailsModel=model("userDetails",userDetailsSchema);
export default userDetailsModel;