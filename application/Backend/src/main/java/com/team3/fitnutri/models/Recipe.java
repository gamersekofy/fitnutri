package com.team3.fitnutri.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Recipe {
    @Id
    private Long id;
    private String name;
    private String nutrientGoal;
    private Integer servingSize;
    private Double caloriesCount;
    // private String[] ingredients;
}
