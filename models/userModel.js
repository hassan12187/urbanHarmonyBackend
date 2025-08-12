import { genSalt ,hash} from "bcrypt";
import {Schema,model} from "mongoose";
const userSchema = new Schema({
    username:{
        type:String,
        minlength:6,
        maxlength:12,
        require:true
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    password:{
        type:String,
        require:true
    },
    image:{
        type:String,
        default:"../assets/images/default.png"
    },
    address:{
        type:String,
    },
    country:{
        type:String
    },
    phoneNumber:{
        type:String,
        maxlength:15
    }
});

userSchema.pre("save",async function(){
    const salt = await genSalt(12);
    const hashPass = await hash(this.password,salt);
    this.password=hashPass;
    return;
});
const userModel=model("User",userSchema);
export default userModel;