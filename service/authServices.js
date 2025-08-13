import { compare } from "bcrypt";
import userModel from "../models/userModel.js";
import { isAlphanumeric } from "./isAlphanumeric.js";
import isEmail from "validator/lib/isEmail.js";
import jwt from "jsonwebtoken";

const login=async(req,res)=>{
    try {
        const {email,password}=req.body;
        const user = await userModel.findOne({email});
        if(!user)return res.status(400).send("User not found");
        const isTrue = await compare(password,user?.password);
        if(isTrue){
            const {_id,email,username,role}=user;
            const token = generateToken({_id,email,username,role});
            return res.send({status:200,message:"Password Matched Login Successfull",token});
        }
        return res.send({status:202,message:"Wrong Credentials"});
    } catch (error) {
        console.log("error inside login controller: ",error);
        return res.send({error:400,message:"Error in login"});
    }
}
const register=async(req,res)=>{
    try {
        const {username,email,password}=req.body;
        const user = await userModel.findOne({email});
        if(user)return res.send({status:400,message:"User already exist!"});
        if(!isEmail(email))return res.send({status:400,message:"Not Valid Email!"});
        if(!isAlphanumeric(username))return res.send({status:400,message:"Not a valid username"});
        const result=new userModel({username,email,password});
        await result.save();
        return result ? res.send({status:200,message:"Registered User Successfully"}) : res.send({status:400,message:"Error Registering User!"});
    } catch (error) {
        return res.send({error:400,message:"Error in Registration"});
    }
}
export const verifyToken=(token)=>{    
    return jwt.verify(token,process.env.secretKey);
};
export const generateToken=(user)=>{
    return jwt.sign(user,process.env.secretKey);
};
export {login,register};