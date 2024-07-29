package com.team3.fitnutri.controllers;

import com.team3.fitnutri.models.Meal;
import com.team3.fitnutri.services.MealService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/meal")
public class MealController {
    @Autowired
    private MealService mealService;

    @GetMapping("/allMeals")
    public ResponseEntity<List<Meal>> getAllMeals() {
        return ResponseEntity.ok(mealService.findAllMeals());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Meal> getMealById(@PathVariable Long id) {
        return ResponseEntity.ok(mealService.findMealById(id));
    }

    @PostMapping("/createMeal")
    public ResponseEntity<Meal> addMeal(@RequestBody Meal meal) {
        return ResponseEntity.ok(mealService.createMeal(meal));
    }

    @PutMapping("/updateMeal/{id}")
    public ResponseEntity<Meal> updateMeal(@PathVariable Long id, @RequestBody Meal meal) {
        return ResponseEntity.ok(mealService.updateMeal(id, meal));
    }

    @DeleteMapping("/deleteMeal/{id}")
    public ResponseEntity<?> deleteMeal(@PathVariable Long id) {
        mealService.deleteMeal(id);
        return ResponseEntity.ok().build();
    }
}