import { verifyToken } from "../service/authServices.js";

export const checkRoleForAdmin=(req,res,next)=>{
    try {
        const token = req.headers.authorization.slice(7);
        const result = verifyToken(token);
        if(result.role != "Admin") return res.send({status:400,message:"You are not Authorized to visit this!"});
        next();
    } catch (error) {
        return res.send({status:400,error});
    }
}
export const checkRoleForDesigner=(req,res,next)=>{
    try {
        const token = req.headers.authorization.slice(7);
        const result = verifyToken(token);
        if(result.role != "Designer") return res.send({status:400,message:"This is Authorized for Designers Only!"});
        next();
    } catch (error) {
        return res.send({status:400,error});
    }
}