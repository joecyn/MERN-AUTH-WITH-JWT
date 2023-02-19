const express=require('express');
const dotenv=require("dotenv")
const router = require('./routes/router');
const app=express()
const cookieParser=require("cookie-parser")
const mongoose=require("mongoose");
const PORT= process.env.PORT || 5000
const cors=require("cors")

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({credentials:true,origin: "http://localhost:3000"}))

dotenv.config()

//DB CONNECTION
mongoose.set('strictQuery', false)
mongoose.connect("mongodb://0.0.0.0:27017/Auth")
        .then(()=>{
            console.log("Connected!")
        })
        .catch((err)=>{
            console.log(err)
        })



app.use("/api",router)

app.listen(PORT,()=>{
console.log(`Server up and running on port ${PORT}`)
})