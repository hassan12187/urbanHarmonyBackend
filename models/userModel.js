import { genSalt ,hash} from "bcrypt";
import {Schema,model} from "mongoose";
<<<<<<< HEAD:models/HomeOwnerModel.js
import isEmail from "validator/lib/isEmail.js";
=======
>>>>>>> refs/remotes/origin/main:models/userModel.js
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
        default:"User"
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
<<<<<<< HEAD:models/HomeOwnerModel.js
// userSchema.path("username").validate({
//     validator:function(v){
//         return v.length >= 6 && /^[a-zA-Z0-9]+$/g.test(v);
//     },
//     message:"Username must be atleast 3 characters long and contain only alphanumeric characters."
// });
// userSchema.path("email").validate({
//     validator:function(v){
//         return isEmail(v);
//     },
//     message:"Email is not valid email"
// })
=======

userSchema.pre("save",async function(){
    const salt = await genSalt(12);
    const hashPass = await hash(this.password,salt);
    this.password=hashPass;
    return;
});
>>>>>>> refs/remotes/origin/main:models/userModel.js
const userModel=model("User",userSchema);
export default userModel;