package com.team3.fitnutri.models;

import jakarta.persistence.*;
import java.util.List;

// TODO maybe each user should have a HealthProfile instance
// TODO find out what is meant by 5.2 Healthline in the data definitions and add it
// TODO take out some of the redundant points in 5. Health Metrics
// TODO expand Disease options
@Entity
public class HealthProfile {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Goal goal;
    private double bmi;
    private double rhr;
    private double a1c;
    private List<Disease> disease;
    private Diet diet;

    public HealthProfile() {

    }

    public HealthProfile(Goal goal, double bmi, double rhr, double a1c, List<Disease> disease, Diet diet) {
        this.goal = goal;
        this.bmi = bmi;
        this.rhr = rhr;
        this.a1c = a1c;
        this.disease = disease;
        this.diet = diet;
    }

    public Goal getGoal() {
        return this.goal;
    }

    public void setGoal(Goal goal) {
        this.goal = goal;
    }

    public double getBmi() {
        return this.bmi;
    }

    public void setBmi(double bmi) {
        this.bmi = bmi;
    }

    public double getRhr() {
        return this.rhr;
    }

    public void setRhr(double rhr) {
        this.rhr = rhr;
    }

    public double getA1c() {
        return this.a1c;
    }

    public void setA1c(double a1c) {
        this.a1c = a1c;
    }

    public List<Disease> getDisease() {
        return this.disease;
    }

    public void setDisease(List<Disease> disease) {
        this.disease = disease;
    }

    public Diet getDiet() {
        return this.diet;
    }

    public void setDiet(Diet diet) {
        this.diet = diet;
    }

    private enum Disease {
        NONE,
        DIABETIC;
    }

    private enum Diet {
        UNRESTRICTED,
        LACTOSEFREE,
        GLUTENFREE,
        DAIRYFREE,
        VEGETARIAN,
        VEGAN,
        PALEO,
        KETO,
        KOSHER;
    }

    private enum Goal {
        ANTIAGE,
        GENERALHEALTH,
        WEIGHTLOSS,
        FITNESS,
        STRESS,
        IMMUNITY;
    }
}
