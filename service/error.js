const error=(req,res,err)=>{
        const {status,message}=err;
        return res.send({status,message});
}
export default error;