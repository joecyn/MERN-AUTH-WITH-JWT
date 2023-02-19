import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/esm/Container';

function SignUp() {
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState('')
    const[name,setName]=useState('')
    const [errorMessage,setErrorMessage]=useState('')
    const navigate=useNavigate()


    const handleSubmit=async(e)=>{
        
        e.preventDefault()
       
        try {
            const res= await axios.post("http://localhost:5000/api/SignUp",{name,email,password})
            if(res.status===200){
              navigate("/SignIn")
            }

        } catch (err) {
            setErrorMessage(err.response.data.Message)
        }
    }

    return ( 
        <>
        <Container>
          
         <Form onSubmit={handleSubmit}>
         {errorMessage &&<Alert variant={'danger'}>{errorMessage}</Alert>}

         <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Enter name"  name='name'
         value={name} onChange={((e)=>setName(e.target.value))}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name='email'
         value={email} onChange={((e)=>setEmail(e.target.value))}
       />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  name='password'
         value={password} onChange={((e)=>setPassword(e.target.value))}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Sign Up
      </Button>
      <p>
        Already have an account ? <Link to="/SignIn">SignIn</Link>
      </p>
    </Form>
        </Container>
        </>
     );
}

export default SignUp;