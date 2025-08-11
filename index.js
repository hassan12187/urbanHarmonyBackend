import express from "express"
const app = express();
app.get("/api/hassan",(req,res)=>{
    try {
        res.send("hassan is here");
        
    } catch (error) {
        res.send({error:"message is here"})
    }
})
app.listen(3000,()=>{
    console.log(`server is running on 3000`);
})