import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import axios from "axios"
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function SignIn() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState('')
    //const[user,setUser]=useState('')
    //const [token,setToken]=useState("")
    const [errorMessage,setErrorMessage]=useState('')
    const navigate=useNavigate()



    const handleSubmit=async(e)=>{
        
        e.preventDefault()
        // alert(email,password)
        try {
            const res= await axios.post("http://localhost:5000/api/SignIn",{email,password})
            const {data}=res
            //setUser(data)
            //console.log(data.token)
           //setToken(data.token)
           const user={
            name:data.name,
            token:data.token,
            email:data.email
           }
            //console.log(user)
            localStorage.setItem("user",JSON.stringify(user))
            navigate("/Home")


        } catch (error) {
          setErrorMessage(error.response.data.Message)
            //console.log()
            
        }
    }
    return (  
      <Container>
         <Form onSubmit={handleSubmit}>
      {errorMessage &&
      <Alert variant={'danger'}>
      {errorMessage}
     </Alert>
      }
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" 
         value={email} onChange={((e)=>setEmail(e.target.value))}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" name="password" 
        value={password} onChange={((e)=>setPassword(e.target.value))}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign In
      </Button>
      <p>
        Don't have an account ? <Link to="/SignUp">Register</Link>
      </p>
    </Form>
      </Container>
       );
}

export default SignIn;