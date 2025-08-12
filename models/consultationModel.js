import { Schema,model } from "mongoose";
const consultationSchema=new Schema({
    UserID:{
        type:Schema.Types.ObjectId,
        require:true,
        ref:"User"
    },
    DesignerID:{
        type:Schema.Types.ObjectId,
        require:true,
        ref:"Designers"
    },
    ScheduleDate:{type:String},
    Status:{
        type:String,
        enum:["Pending","Rejected","Accepted"],
        defaut:"Pending"
    }
});
const consultationModel=model("Consultation",consultationSchema);
export default consultationModel;