package com.team3.fitnutri.models;

import java.util.Map;

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
}
