console.log("MFA is running");
const express = require("express");
const jwt= require("jsonwebtoken");
const speakeasy=require("speakeasy");
const bodyparser =require("body-parser");
const cors=require("cors");

const app=express();
app.use(cors());
app.use(bodyparser.json());

const SECRET = "realsecretkey";

const person = {
  id : 11,
  email : "person@gmail.com",
  password : "###333",
  mfaSecret : speakeasy.generateSecret().base32,
};

app.post("/login",(req,res)=>{
  const {email,password}=req.body;
  if(email === person.email && password === person.password){
    const tempToken = jwt.sign({id:person.id},SECRET,{expiresIn: "5m"});
    const token = speakeasy.totp({secret:person.mfaSecret,encoding:"base32",});
    console.log("OTP:",token);
    res.json({mfaRequired:true,tempToken});
  }
  else{
    res.status(401).json({message:"Invalid Credentials"});
  }
});
app.post("/verify-otp",(req,res)=>{
  const {otp,tempToken}=req.body;

  try{
    const decoded = jwt.verify(tempToken.SECRET);
    const verified = speakeasy.totp.verify(
      {secret:person.mfaSecret,encoding:"base32",token:otp,window:1,});
      if(verified){
        const token = jwt.sign({id : decoded.id},SECRET,{expiresIn:"1h",});
    res.json({token});
      }
      else{
        res.status(400).json({message:"Invalid OTP"});
      }
  }
  catch{
    res.status(401).json({message:"Unauthorized"});
  }
});
app.listen(5001,()=>
console.log("Server running on port 5001"));



