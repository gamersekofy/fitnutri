package com.team3.fitnutri.models;

import jakarta.persistence.*;

@Entity
public class Meal {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private Type type;
    private String name;
    private int calories;
    private Macronutrients macronutrients;
    private Micronutrients micronutrients;

    public Meal() {
        
    }

    public Meal(long id, Type type, String name, int calories, Macronutrients macronutrients, Micronutrients micronutrients) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.calories = calories;
        this.macronutrients = macronutrients;
        this.micronutrients = micronutrients;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public Type getType() {
        return this.type;
    }

    public void setType(Type type) {
        this.type = type;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public int getCalories() {
        return this.calories;
    }

    public void setCalories(int calories) {
        this.calories = calories;
    }

    public Macronutrients getMacronutrients() {
        return this.macronutrients;
    }

    public void setMacronutrients(Macronutrients macronutrients) {
        this.macronutrients = macronutrients;
    }

    public Micronutrients getMicronutrients() {
        return this.micronutrients;
    }

    public void setMicronutrients(Micronutrients micronutrients) {
        this.micronutrients = micronutrients;
    }


    private enum Type {
        BREAKFAST,
        LUNCH,
        DINNER,
        SNACK;
    }
}


