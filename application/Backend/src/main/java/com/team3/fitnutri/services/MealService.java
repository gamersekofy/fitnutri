package com.team3.fitnutri.services;

import com.team3.fitnutri.models.Meal;
import com.team3.fitnutri.repositories.MealRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MealService {
    @Autowired
    private MealRepository mealRepository;

    public List<Meal> findAllMeals() {
        return mealRepository.findAll();
    }

    public Meal findMealById(Long id) {
        Optional<Meal> meal = mealRepository.findById(id);
        return meal.orElse(null);
    }

    public Meal createMeal(Meal meal) {
        return mealRepository.save(meal);
    }

    public Meal updateMeal(Long id, Meal mealData) {
        Optional<Meal> existingMeal = mealRepository.findById(id);
        if (existingMeal.isPresent()) {
            Meal meal = existingMeal.get();
            meal.setId(mealData.getId());
            meal.setType(mealData.getType());
            meal.setName(mealData.getName());
            meal.setCalories(mealData.getCalories());
            return mealRepository.save(meal);
        } else {
            return null;
        }
    }

    public void deleteMeal(Long id) {
        mealRepository.deleteById(id);
    }
}