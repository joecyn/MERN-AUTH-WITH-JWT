const express=require("express");
const router=express.Router()
const Auth=require("../middleware/Auth")
const RegisterController=require("../controllers/RegisterController")
const LoginController=require("../controllers/LoginController")



router.get("/Home",Auth,(req,res)=>{
  
    res.status(200).json("Welcome Home")
})
// router.get("/SignUp",(req,res)=>{
//     res.send("SignUp")
// })

router.post('/SignUp',RegisterController)

router.post('/SignOut', (req,res) => {
    res.cookie('token', '').json('ok');
  });

// router.get("/Login",(req,res)=>{
//     res.send("HOME")
// })

router.post('/SignIn',LoginController)


module.exports=router