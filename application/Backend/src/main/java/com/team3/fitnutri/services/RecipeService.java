package com.team3.fitnutri.services;

import com.team3.fitnutri.models.Recipe;
import com.team3.fitnutri.repositories.RecipeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RecipeService {
    @Autowired
    private RecipeRepository recipeRepository;

    public List<Recipe> findAllRecipes() {
        return recipeRepository.findAll();
    }

    public Recipe findRecipeById(Long id) {
        Optional<Recipe> recipe = recipeRepository.findById(id);
        return recipe.orElse(null);
    }

    public Recipe createRecipe(Recipe recipe) {
        return recipeRepository.save(recipe);
    }

    public Recipe updateRecipe(Long id, Recipe recipeData) {
        Optional<Recipe> existingRecipe = recipeRepository.findById(id);
        if (existingRecipe.isPresent()) {
            Recipe recipe = existingRecipe.get();
            recipe.setName(recipeData.getName());
            recipe.setNutrientGoal(recipeData.getNutrientGoal());
            recipe.setServingSize(recipeData.getServingSize());
            recipe.setCaloriesCount(recipeData.getCaloriesCount());
            recipe.setIngredients(recipeData.getIngredients());
            recipe.setMacroNutrients(recipeData.getMacroNutrients());
            recipe.setMicroNutrients(recipeData.getMicroNutrients());
            recipe.setRecommendedMealType(recipeData.getRecommendedMealType());
            recipe.setSpecialDietAttributes(recipeData.getSpecialDietAttributes());
            recipe.setRecipeInstructions(recipeData.getRecipeInstructions());
            return recipeRepository.save(recipe);
        } else {
            return null;
        }
    }

    public void deleteRecipe(Long id) {
        recipeRepository.deleteById(id);
    }
}