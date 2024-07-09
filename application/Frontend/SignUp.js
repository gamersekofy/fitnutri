import React, { useState } from 'react';

function Signup() {
     // backend
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
     // backend
    console.log('Submitting', { email, password });
     // backend
    setTimeout(() => {
      setEmail('');
      setPassword('');
      alert('Signup successful');
    }, 1000);
  };
 // backend
  return (
    <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label>Password</label>
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Sign Up</button>
    </form>
  );
}

export default Signup;
