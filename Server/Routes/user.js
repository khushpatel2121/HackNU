import express from "express"
import User from "../Models/users.js";

const router = express.Router();

router.get("/",async(req,res,next) =>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(err){
       next(err)
    }
});

router.put("/:id",async(req,res)=>{
    try{
      const usersUpdate = await User.findByIdAndUpdate(req.params.id,
        {$set:req.body},
        {new:true},


      );
      res.status(200).json(usersUpdate)
    }catch{

    }
});

router.delete("/:id",async(req,res)=>{
    try{
      const usersUpdate = await User.findByIdAndDelete(req.params.id);
      res.status(200).json(usersUpdate)
    }catch{

    }
});

export default router;