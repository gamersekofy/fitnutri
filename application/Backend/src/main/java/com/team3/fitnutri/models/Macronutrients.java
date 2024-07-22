package com.team3.fitnutri.models;

public class Macronutrients {
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