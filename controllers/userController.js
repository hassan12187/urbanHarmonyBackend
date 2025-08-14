import userModel from "../models/userModel.js";

export const getUser=async(req,res)=>{
    try {
        const users = await userModel.find({});
        return res.send({status:200,message:users});
    } catch (error) {
        next(error);
    }
}
export const editUser=async()=>{
       try {
        const id = req.params.id;
        const {username,email,password}=req.body;
        const user = await userModel.findOneAndUpdate({_id:id},{username,email,password});
        if(user)return res.send({status:200,message:"User Updated!"});
        return res.send({status:400,message:"User not Updated"});
    } catch (error) {
        return req.send({status:400,message:"Error Editing User!"})
    }
};
export const deleteUser=async()=>{
        try {
        const id = req.params.id;
        const user = await userModel.findOneAndDelete({_id:id});
        if(user)return res.send({status:400,message:"User Deleted!"});
        return res.send({status:200,message:"User not Deleted"});
    } catch (error) {
        return req.send({status:400,message:"Error Deleting User!"})
    }
};