import express from "express";
import User from "../Models/users.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import CryptoJS from "crypto-js";



 


const router = express.Router();

// function generateToken() {
//    const randomBytes = new Uint8Array(32);
//    window.crypto.getRandomValues(randomBytes);
//    return Array.from(randomBytes, (byte) => byte.toString(16)).join('');
//  }

const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
   let result = ' ';
   const charactersLength = characters.length;
   for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }

   return result;
}

 router.post("/register", async (req, res) => {
   const randomBytes = generateString(30);
    try{
      const salt = await bcrypt.genSalt(10);
      const hash = await bcrypt.hash(req.body.password, salt);

      // const Utoken = generateToken();
    //   const encryptEmail = CryptoJS.AES.encrypt(req.body.email, 'secret key 123').toString();
    //   const encrpytUsername = CryptoJS.AES.encrypt(req.body.username,"secret key 123").toString();

    //   const emailbytes  = CryptoJS.AES.decrypt(encryptEmail, 'secret key 123');
    //   const originalEmail = emailbytes.toString(CryptoJS.enc.Utf8);


    //   const Userbytes  = CryptoJS.AES.decrypt(encrpytUsername, 'secret key 123');
    //   const originalUser = Userbytes.toString(CryptoJS.enc.Utf8);
     
      const newUser = new User({
        username: req.body.username,
        email: CryptoJS.AES.encrypt(req.body.email, 'secret key 123'),
        password: hash,
       token:randomBytes,
      });

 


         
      const user = await newUser.save();
    
      const { password,username, ...others } = user._doc;
     res.status(200).json(others);
    }catch(err){
       res.status(500).json(err)
    }
 });

 router.post("/login", async (req, res) => {
    try{

        

       const user = await User.findOne({username:req.body.username});
       !user && res.status(400).json("Wrong credentials");

        

         const validated = await bcrypt.compare(req.body.password, user.password);
            !validated && res.status(400).json("Wrong credentials");

            const token = jwt.sign({ id:user._id, },process.env.JWT);

            const { password,username, ...others } = user._doc;
            res.cookie("access_token",token,{
                httpOnly:true ,
            }).status(200).json(others);

    }catch(error){
        res.status(500).json(error)
    }
 })

 export default router;