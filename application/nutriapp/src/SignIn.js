import React, { useState } from 'react';

function SignIn() {
     // backend
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    // backend
    console.log('Signing in', { email, password });
    setTimeout(() => {
      setEmail('');
      setPassword('');
      alert('Sign-in successful');
    }, 1000);
  };
 // backend
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Sign In</button>
    </form>
  );
}

export default SignIn;
