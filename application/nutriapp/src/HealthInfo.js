import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './HealthInfo.css';

function HealthInfo() {
    const navigate = useNavigate();

  const navigateTopersonalNutritionPlan = () => {
    navigate('/PersonalNutritionPlan');
  };

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

        if (!formData.goalWeight) {
            isValid = false;
            errors['goalWeight'] = 'goalWeight is required';
        } else if (formData.goalWeight > maxWeight) {
            isValid = false;
            errors['goalWeight'] = `goalWeight must be less than than ${maxWeight} Ib`;
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

        // implmenting an API 
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
        
            
            navigate(`/Progress?weight=${formData.weight}&goalWeight=${formData.goalWeight}&daysAvailable=${formData.daysAvailable}`);    };

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
                
                <select name="nutritionTypes" value={formData.nutritionTypes} onChange={handleChange}>
                        <option value="">Select Nutrition Type</option>
                        <option value="Keto">Keto</option>
                        <option value="Vegan">Vegan</option>
                        <option value="Paleo">Paleo</option>
                        <option value="Mediterranean">Mediterranean</option>
                </select>
                {errors.weight && <p className="error">{errors.nutritionTypes}</p>}
                
                <input placeholder='dietaryRestrictions' name='dietaryRestrictions' value={formData.dietaryRestrictions} onChange={handleChange} />
                {errors.age && <p className="error">{errors.dietaryRestrictions}</p>}
                <input placeholder='# of daysAvailable a week' name='daysAvailable' value={formData.daysAvailable} onChange={handleChange} />
                {errors.height && <p className="error">{errors.daysAvailable}</p>}
                
                <select name="workoutTypes" value={formData.workoutTypes} onChange={handleChange}>
                        <option value="">Select Workout Type</option>
                        <option value="Cardio">Cardio</option>
                        <option value="Strength">Strength Training</option>
                        <option value="Flexibility">Flexibility</option>
                        <option value="Balance">Balance Exercises</option>
                    </select>
                {errors.weight && <p className="error">{errors.workoutTypes}</p>}
            
                <div className="terms-container">
                    <label>
                        <div><input type="checkbox" name="termsAccepted" checked={formData.termsAccepted} onChange={handleChange}  /></div> 
                        <div> &nbsp; I agree to the <a href="/terms-and-conditions" target="_blank">Terms and Conditions</a>.</div>
                    </label>
                </div>
                {errors.termsAccepted && <p className="error">{errors.termsAccepted}</p>}
                <button type="submit" onClick={navigateTopersonalNutritionPlan}>Generate Plan</button>
            </form>
        </div>
    );
}

export default HealthInfo;
