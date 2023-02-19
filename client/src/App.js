//import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home";
import SignIn from './Components/SignIn';
import SignUp from './Components/SignUp';
import Navbar from './Components/Bar';
import Landing from './Components/Landing';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Landing/>}/>
      <Route path="/Home" element={<Home />} />
      <Route path="/SignUp" element={<SignUp/>} />
      <Route path="/SignIn" element={<SignIn/>} />
    </Routes>
    </div>
  );
}

export default App;
