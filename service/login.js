const login=(req,res,next)=>{
    try {
        
        res.send({message:"login service"});
    } catch (error) {
        next(error);
    }
}
export default login;