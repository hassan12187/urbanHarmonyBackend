import userModel from "../models/userModel.js";

export const getUsers=async()=>{
    try {
        const result = await userModel.find({});
        return res.send({status:200,message:result});
    } catch (error) {
        return res.send({status:400,message:"Error getting Users!"});
    }
};
export const editUser=async(req,res)=>{
    try {
        const id = req.params.id;
        const {username,email,password,role}=req.body;
        const user = await userModel.findOneAndUpdate({_id:id},{username,email,password,role});
        if(user)return res.send({status:200,message:"User Updated!"});
        return res.send({status:400,message:"User not Updated"});
    } catch (error) {
        return req.send({status:400,message:"Error Editing User!"})
    }
};
export const addAdmin=async(req,res)=>{
    try {
        const {email,username,password,role}=req.body;
        const admin = await userModel.findOne({email});
        if(admin)return res.send({status:400,message:"Admin Already Exist!"});
        const newAdmin = new userModel({username,email,password,role});
        const result = await newAdmin.save();
        return result ? res.send({status:200,message:"Admin Successfully Created!"}) : res.send({status:400,message:"Admin not Created!"});
    } catch (error) {
        return req.send({status:400,message:"Error Adding Admin!"})
    }
}
export const editAdmin=async(req,res)=>{
    try {
        const id = req.params.id;
        const {username,email,password,role}=req.body;
        const admin = await userModel.findOneAndUpdate({_id:id,role:"Admin"},{$set:{username,email,password,role}});
        if(admin)return res.send({status:200,message:"Admin Updated!"});
        return res.send({status:400,message:"Admin Not Updated"});
    } catch (error) {
        return req.send({status:400,message:"Error Editing Admin!"})
    }
}
export const deleteAdmin=async(req,res)=>{
        try {
        const id = req.params.id;
        const admin = await userModel.findOneAndDelete({_id:id});
        if(admin)return res.send({status:400,message:"Admin Deleted!"});
        return res.send({status:200,message:"Admin not Deleted"});
    } catch (error) {
        return req.send({status:400,message:"Error Deleting Admin!"})
    }
}
export const deActiveUser=async(req,res)=>{
    try {
        const id = req.params.id;
        const result = await userModel.findOneAndUpdate({_id:id},{$set:{status:"Deactive"}});
        return result ? res.send({status:200,message:"User Deactivated!"}) : res.send({status:400,message:"User not Deactivated!"});
    } catch (error) {
        return res.send({status:400,message:"Error Deactivating user!"});
    }
}