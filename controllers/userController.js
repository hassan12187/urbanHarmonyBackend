import userModel from "../models/userModel.js";

const getHomeOnwers=(req,res)=>{
    try {
        res.send({message:"hassan is here"});
    } catch (error) {
        next(error);
    }
}
const addUser=async(req,res)=>{
    try {
      
    } catch (error) {
        res.send({error});
    }
};
const login=async(req,res)=>{
   
}
export {getHomeOnwers,addUser};