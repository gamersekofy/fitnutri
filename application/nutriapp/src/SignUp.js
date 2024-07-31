import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        age: '',
        height: '',
        weight: '',
        email: '',
        password: '',
        gender: '',
        dateOfBirth: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const validateForm = () => {
        let isValid = true;
        let newErrors = {};

        if (!formData.first_name.trim()) {
            newErrors.first_name = "First name is required.";
            isValid = false;
        }
        
        if(!formData.last_name.trim()) {
            newErrors.last_name = "Last name required.";
            isValid = false;
        }

        if (!formData.age.trim()){
            newErrors.age = "Age is required";
            isValid = false;
        } else if(Number(formData.age) < 13){
            newErrors.age = "You need to be at least 13 years or older.";
            isValid = false;
        }

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

        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = "Passwords do not match";
            isValid = false;
        }

        setErrors(newErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (validateForm()) {
            console.log('Form Data Submitted:', formData);

            fetch('http://13.57.220.69:8080/user/createUser', {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    firstName: formData.first_name,
                    lastName: formData.last_name,
                    email: formData.email,
                    password: formData.password,
                    age: formData.age,  // Example static age
                    dateOfBirth: formData.dateOfBirth,  // Example static date of birth
                    weight: formData.weight,  // Example static weight
                    height: formData.height,  // Example static height
                    gender: formData.gender  // Example static gender
                })
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error("HTTP error! status: ${response.status}");
                    }
                    return response.json();
                })
                .then(data => {
                    console.log('Registration successful:', data);
                    navigate('/');
                })
                .catch(error => {
                    console.error('Registration failed:', error);
                });
        }
    };

    const handleNavigateToLogin = (e) => {
      e.preventDefault();
      navigate('/SignIn');
  };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <label htmlFor="first_name">First Name</label>
                <input
                    type="text"
                    id="first_name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="height">Height</label>
                <input
                    type="number"
                    id="height"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    required
                />
                {errors.age && <p className="error">{errors.age}</p>}
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    id="age"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                />
                <label htmlFor="weight">Weight</label>
                <input
                    type="number"
                    id="weight"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                />
                {errors.name && <p className="error">{errors.name}</p>}
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <p className="error">{errors.email}</p>}
                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                />
                {errors.password && <p className="error">{errors.password}</p>}
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    required
                />
                {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
                <button type="submit">Create Account</button>
                <div className='to-Login'>
                    <h5>Already have an account? <button onClick={handleNavigateToLogin}>Login</button></h5>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
