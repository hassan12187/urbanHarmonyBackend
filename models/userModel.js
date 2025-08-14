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
    role:{
        type:String,
        enum:["User","Designer","Admin"],
        default:"User"
    },
    imageUrl:{
        type:String,
        default:"../assets/images/default.png"
    },
    status:{
        type:String,
        enum:["Active","Deactive"],
        default:"Active"
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