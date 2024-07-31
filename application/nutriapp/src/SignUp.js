import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SignUp.css";

function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    age: "",
    height: "",
    weight: "",
    email: "",
    password: "",
    gender: "",
    dateOfBirth: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});
  const [hasAgreedToTerms, setHasAgreedToTerms] = useState(false);
  const handleChange = (e) => {
    const { name, value, type } = e.target;
    const updatedFormData = { ...formData, [name]: value };
    const updatedErrors = { ...errors };

    if (type === 'number' && parseFloat(value) < 0) {
      updatedErrors[name] = 'This field cannot have negative values.';
    } else {
      delete updatedErrors[name];
    }

    setFormData(updatedFormData);
    setErrors(updatedErrors);
  };

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

        const maxAge = 100; 
        const maxHeight = 10; 
        const maxWeight = 500; 

    if (!formData.first_name.trim()) {
      newErrors.first_name = "First name is required.";
      isValid = false;
    }

    if (!formData.last_name.trim()) {
      newErrors.last_name = "Last name required.";
      isValid = false;
    }

    if (!formData.age.trim()) {
      newErrors.age = "Age is required";
      isValid = false;
    } else if (formData.age > maxAge) {
      isValid = false;
      errors['age'] = `Age must be less than ${maxAge} Ib`;
  }

    if (!formData.height) {
      isValid = false;
      errors['height'] = 'Height is required';
  } else if (formData.height > maxHeight) {
      isValid = false;
      errors['height'] = `Height must be less than ${maxHeight} ft`;
  }

  if (!formData.weight) {
      isValid = false;
      errors['weight'] = 'Weight is required';
  } else if (formData.weight > maxWeight) {
      isValid = false;
      errors['weight'] = `Weight must be less than  than ${maxWeight} Ib`;
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
      console.log("Form Data Submitted:", formData);

      const formattedDateOfBirth = formData.dateOfBirth;

      const payload = {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
        age: formData.age,
        dateOfBirth: formattedDateOfBirth,
        weight: formData.weight,
        height: formData.height,
        gender: formData.gender,
      };

      fetch("http://13.57.220.69:8080/user/createUser", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("HTTP error! status: ${response.status}");
          }
          return response.json();
        })
        .then((data) => {
          console.log("Registration successful:", data);
          navigate("/");
        })
        .catch((error) => {
          console.error("Registration failed:", error);
        });
    }
  };

  const handleNavigateToLogin = (e) => {
    e.preventDefault();
    navigate("/SignIn");
  };
  return (
    <div class="signup-container">
      <form class="signup-form" onSubmit={handleSubmit}>
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
        <label htmlFor="age">Age</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
         {errors.age && <p className="error">{errors.age}</p>}
        <label htmlFor="dateOfBirth">Date of Birth</label>
        <input
          type="date"
          id="dateOfBirth"
          name="dateOfBirth"
          value={formData.dateOfBirth}
          onChange={handleChange}
          required
        />
        {errors.age && <p className="error">{errors.age}</p>}
        <label htmlFor="height">Height</label>
        <input
          type="number"
          id="height"
          name="height"
          value={formData.height}
          onChange={handleChange}
          required
        />
        {errors.height && <p className="error">{errors.height}</p>}
        <label htmlFor="weight">Weight</label>
        <input
          type="number"
          id="weight"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          required
        />
        {errors.weight && <p className="error">{errors.weight}</p>}
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
        {errors.confirmPassword && (
          <p className="error">{errors.confirmPassword}</p>
        )}

        <label>
          <input
            type="checkbox"
            checked={hasAgreedToTerms}
            onChange={e => setHasAgreedToTerms(e.target.checked)}
          />
          I agree to the Terms and Conditions
        </label>
        {!hasAgreedToTerms && <p className="error">You must agree to the terms.</p>}

        <button type="submit">Create Account</button>
        <div className="to-Login">
          <h5>
            Already have an account?{" "}
            <button onClick={handleNavigateToLogin}>Login</button>
          </h5>
        </div>
      </form>
    </div>
  );
}

export default SignUp;