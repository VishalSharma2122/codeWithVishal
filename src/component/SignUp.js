import React from 'react'
import './SignUp.css';
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <>
    <div className="SignUp-content">
   <div className="main">
			<div className="signup">
				<form>
					<label className="label-2"><b>Sign Up</b></label>
					<input className='SignUp-input' type="text" placeholder="Full Name" required/>
					<input className='SignUp-input' type="date"/>
					<input className='SignUp-input' type="text" name="txt" placeholder="User name" required=""/>
					<input className='SignUp-input' type="email" name="email" placeholder="Email" required=""/>
					<input className='SignUp-input' type="password" name="pswd" placeholder="Password" required=""/>
                    <h5 className="SignUp-text">I have an Existing Account<Link to="/Login"> Log In</Link></h5>
					<button className="sign-btn" ><a href="Home.html"><b> Sign Up</b></a></button>
				</form>
			</div>
		</div>
    </div>
    </>
  )
}

export default SignUp