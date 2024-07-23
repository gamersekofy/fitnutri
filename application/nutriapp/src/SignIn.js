import React from 'react';
import './SignIn.css';

function SignIn() {
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
      <button type="submit">Sign In</button>
    </form>
     </div>
  );
}

export default SignIn;
