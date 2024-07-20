package com.team3.fitnutri.models;

import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

import java.util.List;

@Entity
public class Recipe {
    @Id
    private Long id;
    private String name;
    private String nutrientGoal;
    private Integer servingSize;
    private Double caloriesCount;
    @ElementCollection
    private List<String> ingredients;
    @ElementCollection
    private List<String> macroNutrients;
    @ElementCollection
    private List<String> microNutrients;
    private String recommendedMealType;
    @ElementCollection
    private List<String> specialDietAttributes;
    @ElementCollection
    private List<String> recipeInstructions;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getNutrientGoal() {
        return nutrientGoal;
    }

    public void setNutrientGoal(String nutrientGoal) {
        this.nutrientGoal = nutrientGoal;
    }

    public Integer getServingSize() {
        return servingSize;
    }

    public void setServingSize(Integer servingSize) {
        this.servingSize = servingSize;
    }

    public Double getCaloriesCount() {
        return caloriesCount;
    }

    public void setCaloriesCount(Double caloriesCount) {
        this.caloriesCount = caloriesCount;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }

    public List<String> getMacroNutrients() {
        return macroNutrients;
    }

    public void setMacroNutrients(List<String> macroNutrients) {
        this.macroNutrients = macroNutrients;
    }

    public List<String> getMicroNutrients() {
        return microNutrients;
    }

    public void setMicroNutrients(List<String> microNutrients) {
        this.microNutrients = microNutrients;
    }

    public String getRecommendedMealType() {
        return recommendedMealType;
    }

    public void setRecommendedMealType(String recommendedMealType) {
        this.recommendedMealType = recommendedMealType;
    }

    public List<String> getSpecialDietAttributes() {
        return specialDietAttributes;
    }

    public void setSpecialDietAttributes(List<String> specialDietAttributes) {
        this.specialDietAttributes = specialDietAttributes;
    }

    public List<String> getRecipeInstructions() {
        return recipeInstructions;
    }

    public void setRecipeInstructions(List<String> recipeInstructions) {
        this.recipeInstructions = recipeInstructions;
    }
}
