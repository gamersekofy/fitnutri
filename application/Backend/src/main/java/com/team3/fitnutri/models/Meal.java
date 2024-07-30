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
    /*private Macronutrients macronutrients;
    private Micronutrients micronutrients;*/

    public Meal() {
        
    }

    public Meal(long id, Type type, String name, int calories) {
        this.id = id;
        this.type = type;
        this.name = name;
        this.calories = calories;
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

    /*public Macronutrients getMacronutrients() {
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
    }*/


    private enum Type {
        BREAKFAST,
        LUNCH,
        DINNER,
        SNACK;
    }

    /*public class Macronutrients {
        private int carbohydrates;
        private int proteins;
        private int fats;
    
        public Macronutrients(int carbohydrates, int proteins, int fats) {
            this.carbohydrates = carbohydrates;
            this.proteins = proteins;
            this.fats = fats;
        }
    
        public int getCarbohydrates() {
            return this.carbohydrates;
        }
    
        public void setCarbohydrates(int carbohydrates) {
            this.carbohydrates = carbohydrates;
        }
    
        public int getProteins() {
            return this.proteins;
        }
    
        public void setProteins(int proteins) {
            this.proteins = proteins;   
        }
    
        public int getFats() {
            return this.fats;
        }
    
        public void setFats(int fats) {
            this.fats = fats;
        }
    
    }

    public class Micronutrients {
        private Map<String, Integer> vitamins;
        private Map<String, Integer> minerals;
        private int fiber;
    
        public Micronutrients(Map<String, Integer> vitamins, Map<String, Integer> minerals, int fiber) {
            this.vitamins = vitamins;
            this.minerals = minerals;
            this.fiber = fiber;
        }
    
        public Map<String, Integer> getVitamins() {
            return this.vitamins;
        }
    
        public void setVitamins(Map<String, Integer> vitamins) {
            this.vitamins = vitamins;
        }
    
        public Map<String, Integer> getMinerals() {
            return this.minerals;
        }
    
        public void setMinerals(Map<String, Integer> minerals) {
            this.minerals = minerals;
        }
    
        public int getFiber() {
            return this.fiber;
        }
        
    }*/
}


