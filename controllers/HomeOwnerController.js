import isEmail from "validator/lib/isEmail.js";
import userModel from "../models/HomeOwnerModel.js";
import pkg from "validator";
const {isAlphanumeric}=pkg;

const getHomeOnwers=(req,res)=>{
    try {
        res.send({message:"hassan is here"});
    } catch (error) {
        next(error);
    }
}
const addUser=async(req,res,next)=>{
    try {
        const {username,email,password}=req.body;
        const user = await userModel.findOne({email});
        if(user) return res.send({status:403,message:"Email Already Exist"});
        if(!isAlphanumeric(username)) return res.send({status:401,message:"Not a valid Username Or Email"});
        if(!isEmail(email))return res
        const result = new userModel({username,email,password});
        await result.save();
        if(result){
           return res.send({status:200,message:"User Successfully Registered"});
        };
        return res.send({status:401,message:"Error inside adding user"})
    } catch (error) {
        console.log(error);
        next({
            status:401,
            message:"Error in adding user"
        });
    }
}
export {getHomeOnwers,addUser};