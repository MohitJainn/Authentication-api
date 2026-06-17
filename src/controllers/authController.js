const bcrypt=require("bcrypt");
const User=require("../models/User");
exports.register=async (req,res)=>{
try{
    const {name,email,password}=req.body;
const existinguser=await User.findOne({email});
if(!name || !email || !password){
    return res.status(400).json({
        message:"all fields are necessary"
    });
}
if(existinguser){
    return res.status(400).json({
        message: "user aleady exists"
    });
}
const hashedpassword =
    await bcrypt.hash(password, 10);

const user=await User.create({
    name,
    email,
    password:hashedpassword
});
res.status(201).json({
    message:"user created"
});
} catch(error){
    console.error(error);
}
};


















