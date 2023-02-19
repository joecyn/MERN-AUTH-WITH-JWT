import axios from "axios";
import { useEffect, useState } from "react";
import Container from "react-bootstrap/esm/Container";
//import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home() {

    const navigate=useNavigate()
    const [message,setMessage]=useState('')

    const user=localStorage.getItem("user")
    //const savedUser=JSON.parse(user)
    useEffect(()=>{
       const getData=async()=>{

        if(!user){
            navigate("/");
           
        }
        
        try {
        axios.defaults.withCredentials = true;
           await axios.get("http://localhost:5000/api/Home")
            .then(res=>{
                if(res.status===200){
                    setMessage(res.data)
                    
                }
            })
            
        } catch (error) {
            
            navigate("/");
            
        }
       
        
       }
       getData()

    },[ user])
    
    
    return ( 
     <Container>
         <div>
            <p>{message} </p>
            </div> 
            
     </Container>
     );
}

export default Home;