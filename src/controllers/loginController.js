const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const User = require("../models/User");
exports.login=async (req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(!user){
        return res.status(400).json({
            message:"invalid credentials"
        });
    }
    const isMatch = await bcrypt.compare(
    password,
    user.password
);
    if(!isMatch){
        return res.status(400).json({
            message:"invalid credentails"
        });
    }
    const token=jwt.sign(
        {
userId:user._id
        },
        process.env.JWT_SECRET,
        {
            expiresIn:"7d"
        }
    );
res.json({
    token
});
};
exports.profile = async (req, res) => {

    const user = await User.findById(
        req.user.userId
    ).select("-password");

    res.json(user);
};