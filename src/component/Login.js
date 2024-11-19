import React from 'react'
import './Login.css';
import { Link } from 'react-router-dom';
function Login() {
  return (
    <>
    <div className="Login-content">
   <div className="login">
	<div className="Login-main">  	
			<form action="#">
				<label className="label-1"><b>Login</b></label>
				<input type="email" name="email" placeholder="Email" required=""/>
				<input type="password" name="pswd" placeholder="Password" required=""/>
				<h5 className="Login-text">Create a new Account <Link to="/SignUp"><b>Sign Up</b></Link></h5>
				<button className="login-btn-2"><a target="_parent" href="Home.html"><b>Login</b></a></button>
		</form>
	</div>
    </div>
    </div>
    </>
  )
}

export default Login