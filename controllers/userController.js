import userModel from "../models/userModel.js";

export const getUsers=async(req,res)=>{
    try {
        const users = await userModel.find({});
        return res.send({status:200,message:users});
    } catch (error) {
        next(error);
    }
}
export const editUser=async()=>{};
export const deleteUser=async()=>{};