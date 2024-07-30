import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ForgotPassword.css';


function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch('http://localhost:8080/user/forgot-password', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email })
    })
    .then(response => {
      if (response.ok) {
        setMessage('A password reset link has been sent to your email address.');
        setError('');
      } else {
        throw new Error('There was an error sending the reset link.');
      }
    })
    .catch(error => {
      setError(error.message);
      setMessage('');
    });
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Reset Password</h2>
        <p>Please enter your email address to receive a link to create a new password via email.</p>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Reset Link</button>
        {message && <div className="message">{message}</div>}
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default ForgotPassword;
