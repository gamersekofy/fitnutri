import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignIn() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.email) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
      isValid = false;
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
      isValid = false;
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log('Form Data Submitted:', formData);
      // API call to log in the user
      fetch('http://localhost:8080/user/login', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
      .then(response => response.json())
      .then(data => {
          console.log('Log in successful:', data);
          navigate('/');
      })
      .catch(error => {
          console.error('Log in failed:', error);
          
          setErrors({ api: 'Login failed, please try again.' });
      });
    }
  };

  return (
    <div className="signup-container"> 
      <form className="signup-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        {errors.email && <div className="error">{errors.email}</div>}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        {errors.password && <div className="error">{errors.password}</div>}
        {errors.api && <div className="error">{errors.api}</div>}
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default SignIn;
