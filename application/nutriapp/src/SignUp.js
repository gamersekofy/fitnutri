// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import './SignUp.css';
//
// function SignUp() {
//     const navigate = useNavigate();
//     const [formData, setFormData] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''
//     });
//     const [errors, setErrors] = useState({});
//
//     const handleChange = (e) => {
//         setFormData({
//             ...formData,
//             [e.target.name]: e.target.value
//         });
//     };
//
//     const validateForm = () => {
//         let isValid = true;
//         let newErrors = {};
//
//         if (!formData.name.trim()) {
//             newErrors.name = "Name is required";
//             isValid = false;
//         }
//
//         if (!formData.email) {
//             newErrors.email = "Email is required";
//             isValid = false;
//         } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//             newErrors.email = "Email is invalid";
//             isValid = false;
//         }
//
//         if (!formData.password) {
//             newErrors.password = "Password is required";
//             isValid = false;
//         } else if (formData.password.length < 8) {
//             newErrors.password = "Password must be at least 8 characters long";
//             isValid = false;
//         }
//
//         if (formData.password !== formData.confirmPassword) {
//             newErrors.confirmPassword = "Passwords do not match";
//             isValid = false;
//         }
//
//         setErrors(newErrors);
//         return isValid;
//     };
//
//     const handleSubmit = (e) => {
//         e.preventDefault();
//
//         if (validateForm()) {
//             console.log('Form Data Submitted:', formData);
//             // example of an API call to register user
//             fetch('http://localhost:8080/user/createUser', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify(formData)
//             })
//             .then(response => response.json())
//             .then(data => {
//                 console.log('Registration successful:', data);
//                 navigate('/');
//             })
//             .catch(error => {
//                 console.error('Registration failed:', error);
//             });
//         }
//
//
//     };
//
//     const handleNavigateToLogin = (e) => {
//       e.preventDefault();
//       navigate('/SignIn');
//   };
//
//     return (
//         <div className="signup-container">
//             <form className="signup-form" onSubmit={handleSubmit}>
//                 <h2>Sign Up</h2>
//                 <label htmlFor="name">Name</label>
//                 <input
//                     type="text"
//                     id="name"
//                     name="name"
//                     value={formData.name}
//                     onChange={handleChange}
//                     required
//                 />
//                 {errors.name && <p className="error">{errors.name}</p>}
//                 <label htmlFor="email">Email</label>
//                 <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={handleChange}
//                     required
//                 />
//                 {errors.email && <p className="error">{errors.email}</p>}
//                 <label htmlFor="password">Password</label>
//                 <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={handleChange}
//                     required
//                 />
//                 {errors.password && <p className="error">{errors.password}</p>}
//                 <label htmlFor="confirmPassword">Confirm Password</label>
//                 <input
//                     type="password"
//                     id="confirmPassword"
//                     name="confirmPassword"
//                     value={formData.confirmPassword}
//                     onChange={handleChange}
//                     required
//                 />
//                 {errors.confirmPassword && <p className="error">{errors.confirmPassword}</p>}
//                 <button type="submit" onClick={handleSubmit}>Create Account</button>
//                 <div className='to-Login'>
//                     <h5>Already have an account? <button onClick={handleNavigateToLogin}>Login</button></h5>
//                 </div>
//             </form>
//         </div>
//     );
// }
//
// export default SignUp;


//testing purposes

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignUp.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        age: 0,
        dateOfBirth: '',
        weight: 0.0,
        height: 0.0,
        gender: '',
        password: '',
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
            newErrors.first_name = "First name is required";
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
            fetch('http://localhost:8080/user/createUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            })
                .then(response => response.json())
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
                {errors.first_name && <p className="error">{errors.first_name}</p>}
                <label htmlFor="last_name">Last Name</label>
                <input
                    type="text"
                    id="last_name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    required
                />
                {errors.last_name && <p className="error">{errors.last_name}</p>}
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
                <button type="submit" onClick={handleSubmit}>Create Account</button>
                <div className='to-Login'>
                    <h5>Already have an account? <button onClick={handleNavigateToLogin}>Login</button></h5>
                </div>
            </form>
        </div>
    );
}

export default SignUp;
