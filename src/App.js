import React, { useState } from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from "./component/Login";
import Home from "./Home";
import Alerts from "./Alerts";
import SignUp from "./component/SignUp";



// Define your page components
const Skill = () => <div>Skill Page</div>;
const Projects = () => <div>Projects Page</div>;
const Notes = () => <div>Notes Page</div>;

function App() {


  const [alert,changeAlert]=useState(null)
  const showAlert=(message,type)=>{
    changeAlert({
      message:message,
      type:type,
    })
  setTimeout(() => {
    changeAlert(null)
  }, 3000);

  }
  // Toggle button state
  const [mode, changeMode] = useState("light");

  const modeBtn = () => {
    if (mode === "light") {
      changeMode("dark");
      document.body.style.backgroundColor = "black";
        showAlert('Dark mode is on','success')
    } else {
      changeMode("light");
      document.body.style.backgroundColor = "white";
      showAlert('Light mode is on','success')
    }
  };

  // Responsive nav
  const responsive = () => {
    let navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
  };
  
  const cvdwn = () => {
    // Create a temporary link element
    const link = document.createElement('a');
    link.href = '/Designer-removebg-preview.png'; 
    
    link.download = 'CV.png'; 
    link.click();
    showAlert('CV is downloading','success')
  };
  return (
    <Router>
      <header>
        <div className="header">
          <div className="header-left">
            <Link to="/"><img src="/Designer-removebg-preview.png" alt="logo" /></Link>
          </div>
          <div className="toggle-switch">
            <label className="switch-label">
              <input type="checkbox" className="checkbox" onClick={modeBtn} />
              <span className="slider"></span>
            </label>
          </div>
          <div className="header-right">
            {/* Button to toggle the menu */}
            <button className="nav-toggle" onClick={responsive}>
              <span className="bar"></span>
              <span className="bar2"></span>
              <span className="bar"></span>
            </button>
            {/* Menu with conditional className */}
            <nav className="nav-menu">
              <Link className="active" to="/Home"><b>Home</b></Link>
              <Link to="/skill"><b>Skill</b></Link>
              <Link to="/projects"><b>Projects</b></Link>
              <Link to="/notes"><b>Notes</b></Link>
              <Link to="/login"m  className="login-btn"><b>Login</b></Link>
            </nav>
          </div>
        </div>
      </header>
      <Alerts alert={alert}/>
      {/* Define Routes */}
      <Routes>
        <Route path="/" element={<Navigate to="/Home" />} />
        <Route path="/Home" element={<Home click={cvdwn} />} />
        <Route path="/skill" element={<Skill />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/SignUp" element={<SignUp/>} />
      </Routes>
      <footer className="footer">
        <div className="footer-left">
          <a href="/Home"> <img src="/Designer-removebg-preview.png" alt="logo" /></a>
          <p className="footer-links">
            <Link className="active" to="/Home"><b>Home</b></Link>
            <Link to="/skill"><b>Skill</b></Link>
            <Link to="/projects"><b>Projects</b></Link>
            <Link to="/notes"><b>Notes</b></Link>
          </p>
          <p>CodingWithVishal © 2024</p>
        </div>

        <div className="footer-center">
          <div>
            <h2>Contact info</h2>
          </div>
          <div>
            <h4>📍M-Pocket Ganga Nagar <br /> Meerut U.P.</h4>
          </div>
          <div className="contact">
            <h5><a href="mailto:vishalpandit3456g@gmail.com"> Email: vishalpandit3456g@gmail.com</a></h5>
          </div>
        </div>

        <div className="footer-right">
          <h2>About Us</h2>
          <h4>"Elevating Ideas into Seamless <br /> Web Solutions- Where Innovation Meets <br /> Precision in Development"</h4>
          <a href="https://www.facebook.com/pandit.vishalguru?sfnsn=wiwspwa&mibextid=RUbZ1f" className="fa fa-facebook"></a>
          <a href="#" className="fa fa-twitter"></a>
          <a href="https://www.instagram.com/pandatvishal315/" className="fa fa-instagram"></a>
          <a href="#" className="fa fa-linkedin"></a>
        </div>
      </footer>
    </Router>
  );
}

export default App;
