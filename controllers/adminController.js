import userModel from "../models/userModel.js";

export const editUser=async(req,res)=>{};
export const addAdmin=async(req,res)=>{
    try {
        const {email,username,password,role}=req.body;
        const admin = await userModel.findOne({email});
        if(admin)return res.send({status:400,message:"Admin Already Exist!"});
        const newAdmin = new userModel({username,email,password,role});
        const result = await newAdmin.save();
        return result ? res.send({status:200,message:"Admin Successfully Created!"}) : res.send({status:400,message:"Admin not Created!"});
    } catch (error) {
        
    }
}
export const editAdmin=async(req,res)=>{}
export const deleteAdmin=async(req,res)=>{}