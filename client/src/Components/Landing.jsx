import Container from "react-bootstrap/esm/Container";
import jwt from '../images/jwt.png';
import react from '../images/react.png';
import node from '../images/node.png';

const Landing = () => {
    return ( 
        <Container>
            <div>
            <img src={jwt} alt="" srcset="" />
            <img src={react} alt="" srcset="" />
            <img src={node} alt="" srcset="" />
            </div>
        </Container>
     );
}
 
export default Landing;