const User=require("../Models/user");
const bcrypt=require("bcrypt");
const jwt = require("jsonwebtoken")

const loginController=async(req,res)=>{
    //creating JWT token
    const maxAge=3*26*60*60;
    const createToken=(id,name)=>{
       return jwt.sign({id,name},process.env.JWT_SECRET,{
           expiresIn:maxAge
       });
       
    }
    try{
    const{email,password}=req.body;
    if(!email || !password){
        const Message="All fields are required!"
        
        res.status(400).json({Message})
    } 
    
    else{
        const findUser= await User.findOne({email:email})
    if(!findUser) {
        const Message="User does not Exist please Register"
        res.status(400).json({Message})
    } 
    

    const match= await bcrypt.compare(password,findUser.password)

    if(!match) {
        const Message ="Invalid password or User name"
       res.status(400).json({Message})
    }
    else{
        
        const token=createToken(findUser._id,findUser.name);
        const {name,email}=findUser
        res.cookie('jwt',token,{httpOnly:true,maxAge:maxAge*1000});
        res.status(200).json({name,email,token})
      
    }
    
    }
    
    }
    catch(err){
        console.log(err)
    }
    

}
module.exports=loginController;