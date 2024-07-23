import React from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';

function SignIn() {

  const navigate = useNavigate();

    const handleNavigateTohome = () => {
      navigate('/');
    };

  return (
    <div>
    
    <form className="sign-in-form">
    <div><h1>Sign In</h1></div>
      <div className='Email'>
        <label>Email: </label>
      <input type="email" placeholder="Enter your email" />
      </div>
      <div className='Password'>
      <label>Password: </label>
      <input type="password" placeholder="Enter your password" />
      </div>
      <button type="submit" onClick={handleNavigateTohome}>Sign In</button>
    </form>
     </div>
  );
}

export default SignIn;
