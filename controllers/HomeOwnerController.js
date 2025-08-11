const getHomeOnwers=(req,res)=>{
    try {
        res.send({message:"hassan is here"});
    } catch (error) {
        next(error);
    }
}
export {getHomeOnwers};