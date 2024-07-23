import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {

    const navigate = useNavigate();

    const handleNavigateTohome = () => {
      navigate('/');
    };

    return (
        <div>
            <form className="sign-up-form">
            <div><h1>Sign Up</h1></div>
          <div className='Name'><label> Full Name: <input type="text" placeholder="Enter your full name"/> </label></div>
          <div className='Email'><label> Email:<input type="email"placeholder="Enter your email"/></label></div>
          <div className='Password'><label> Password:<input type="password" placeholder="Create a password"/> </label></div>
          <button type="submit" onClick={handleNavigateTohome}>Sign Up</button>
            </form>
        </div>
    );
}

export default SignUp;
