import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HealthInfo.css';

function HealthInfo() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        age: '',
        height: '',
        weight: '',
        goalWeight: '',
        a1cReading: '',
        nutritionTypes: '',
        dietaryRestrictions: '',
        daysAvailable: '',
        workoutTypes: '',
        termsAccepted: false
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
       
        if (type === 'number' && parseFloat(value) < 0) {
            setErrors({
                ...errors,
                [name]: 'This field cannot have negative values.'
            });
            return; 
        }
      
        const newErrors = { ...errors };
        delete newErrors[name]; 
        setErrors(newErrors);

        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };


    const validateForm = () => {
        let isValid = true;
        let errors = {};

        const maxAge = 100; 
        const maxHeight = 10; 
        const maxWeight = 500; 


        if (!formData.age) {
            isValid = false;
            errors['age'] = 'Age is required';
        } else if (formData.age > maxAge) {
            isValid = false;
            errors['age'] = `Age must be less than or equal to ${maxAge}`;
        }

        if (!formData.height) {
            isValid = false;
            errors['height'] = 'Height is required';
        } else if (formData.height > maxHeight) {
            isValid = false;
            errors['height'] = `Height must be less than or equal to ${maxHeight} cm`;
        }

        if (!formData.weight) {
            isValid = false;
            errors['weight'] = 'Weight is required';
        } else if (formData.weight > maxWeight) {
            isValid = false;
            errors['weight'] = `Weight must be less than or equal to ${maxWeight} kg`;
        }

        if (!formData.goalWeight) {
            isValid = false;
            errors['goalWeight'] = 'goalWeight is required';
        } else if (formData.goalWeight > maxWeight) {
            isValid = false;
            errors['goalWeight'] = `goalWeight must be less than or equal to ${maxWeight} kg`;
        }
        if(!formData.a1cReading){
            isValid = false;
            errors['a1cReading'] = 'a1cReading is required';
        }
        if(!formData.nutritionTypes){
            isValid = false;
            errors['nutritionTypes'] = 'nutritionTypes is required';
        }
        if(!formData.dietaryRestrictions){
            isValid = false;
            errors['dietaryRestrictions'] = 'dietaryRestrictions is required';
        }
        if(!formData.daysAvailable){
            isValid = false;
            errors['daysAvailable'] = 'daysAvailable is required';
        }
        if(!formData.workoutTypes){
            isValid = false;
            errors['workoutTypes'] = 'workoutTypes is required';
        }

        if (!formData.termsAccepted) {
            isValid = false;
            errors['termsAccepted'] = 'You must agree to the terms and conditions';
        }
        

        setErrors(errors);
        return isValid;
    };

    


    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            console.error('Validation failed:', errors);
            return;
        }

        // example of implmenting an API setup to handle this POST request
        fetch('/api/healthinfo', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            navigate('/PersonalNutritionPlan');
        })
        .catch((error) => {
            console.error('Error:', error);
        });

    
            e.preventDefault();
            if (!validateForm()) {
                console.error('Validation failed:', errors);
                return;
            }
        
            // Navigate with parameters
            navigate(`/Progress?weight=${formData.weight}&goalWeight=${formData.goalWeight}&daysAvailable=${formData.daysAvailable}`);
    
        



    };

    return (
        <div className="health-container">
            <form className="health-form" onSubmit={handleSubmit}>
                <h2>Health Information</h2>
                <input placeholder='Age' name='age' type="number" value={formData.age} onChange={handleChange} />
                {errors.age && <p className="error">{errors.age}</p>}
                <input placeholder='Height' name='height' type="number" value={formData.height} onChange={handleChange} />
                {errors.height && <p className="error">{errors.height}</p>}
                <input placeholder='Weight' name='weight' type="number" value={formData.weight} onChange={handleChange} />
                {errors.weight && <p className="error">{errors.weight}</p>}
                <input placeholder='goalWeight' name='goalWeight' type="number" value={formData.goalWeight} onChange={handleChange} />
                {errors.goalWeight && <p className="error">{errors.goalWeight}</p>}
                <input placeholder='a1cReading' name='a1cReading' value={formData.a1cReading} onChange={handleChange} />
                {errors.height && <p className="error">{errors.a1cReading}</p>}
                <input placeholder='nutritionTypes' name='nutritionTypes' value={formData.nutritionTypes} onChange={handleChange} />
                {errors.weight && <p className="error">{errors.nutritionTypes}</p>}
                <input placeholder='dietaryRestrictions' name='dietaryRestrictions' value={formData.dietaryRestrictions} onChange={handleChange} />
                {errors.age && <p className="error">{errors.dietaryRestrictions}</p>}
                <input placeholder='daysAvailable' name='daysAvailable' value={formData.daysAvailable} onChange={handleChange} />
                {errors.height && <p className="error">{errors.daysAvailable}</p>}
                <input placeholder='workoutTypes' name='workoutTypes' value={formData.workoutTypes} onChange={handleChange} />
                {errors.weight && <p className="error">{errors.workoutTypes}</p>}
            
                <div className="terms-container">
                    <label>
                        <div><input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange}  /></div> 
                        <div> &nbsp; I agree to the <a href="/terms-and-conditions" target="_blank">Terms and Conditions</a>.</div>
                    </label>
                </div>
                {errors.termsAccepted && <p className="error">{errors.termsAccepted}</p>}
                <button type="submit">Generate Plan</button>
            </form>
        </div>
    );
}

export default HealthInfo;
