import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

function Bar() {
  const navigate=useNavigate()
  const user=localStorage.getItem("user")
  const savedUser=JSON.parse(user)
  const Logout=()=>{
    axios.defaults.withCredentials = true;
    axios.post("http://localhost:5000/api/SignOut")
    .then(res=>{
        if(res.status===200){
            localStorage.removeItem("user");
            navigate("/");

        }
    })
    

}


  return (
    <Navbar>
      <Container>
        <Navbar.Brand href="/Home">REACT NODE AUTH WITH JWT </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          {savedUser ?
            <Navbar.Text>
            <Navbar.Brand href="/Home">HOME </Navbar.Brand> 
            Signed in as:  {savedUser.name.charAt(0).toUpperCase() + savedUser.name.slice(1)} <b>Email:</b>{savedUser.email}
            <span>  </span>
            <Button onClick={Logout} variant="primary">LOG OUT</Button>
          </Navbar.Text>
          :

          <Navbar.Text>
            <Button href='/SignUp' variant="primary">SIGN UP</Button>
            <span> </span>  <span>  </span>
            <Button href='/SignIn' variant="primary">SIGN IN</Button>
            
          </Navbar.Text>
          
          }
          
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
  );
}

export default Bar;