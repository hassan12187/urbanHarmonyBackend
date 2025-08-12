import {Schema,model} from "mongoose";
import isEmail from "validator/lib/isEmail.js";
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
const userModel=model("User",userSchema);
export default userModel;