const login=(req,res,next)=>{
    try {
        console.log(req.body);

        res.send({message:"login service"});
    } catch (error) {
        next(error);
    }
}
export default login;