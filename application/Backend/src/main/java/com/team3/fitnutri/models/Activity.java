package com.team3.fitnutri.models;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Activity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private LocalDate activityDate;
    private Type activityType;
    private double activityDuration;
    private double activityDistance;
    private int caloriesBurned;
    private int userHeartRate;
    
    
    public Activity() {
        
    }

    public Activity(Long id, LocalDate activityDate, Type activityType, double activityDuration, double activityDistance, int caloriesBurned, int userHeartRate) {
        this.id = id;
        this.activityDate = activityDate;
        this.activityType = activityType;
        this.activityDuration = activityDuration;
        this.activityDistance = activityDistance;
        this.caloriesBurned = caloriesBurned;
        this.userHeartRate = userHeartRate;
    }

    public long getId() {
        return this.id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public LocalDate getActivityDate() {
        return this.activityDate;
    }
    public void setActivityDate(LocalDate activityDate) {
        this.activityDate = activityDate;
    }
    public Type getActivityType() {
        return this.activityType;
    }
    public void setActivityType(Type activityType) {
        this.activityType = activityType;
    }
    public double getActivityDuration() {
        return this.activityDuration;
    }
    public void setActivityDuration(double activityDuration) {
        this.activityDuration = activityDuration;
    }
    public double getActivityDistance() {
        return this.activityDistance;
    }
    public void setActivityDistance(double activityDistance) {
        this.activityDistance = activityDistance;
    }
    public int getCaloriesBurned() {
        return this.caloriesBurned;
    }
    public void setCaloriesBurned(int caloriesBurned) {
        this.caloriesBurned = caloriesBurned;
    }
    public int getUserHeartRate() {
        return this.userHeartRate;
    }
    public void setUserHeartRate(int userHeartRate) {
        this.userHeartRate = userHeartRate;
    }

    private enum Type {
        CARDIO, WEIGHTLIFTING, MOBILITY, MINDFULNESS;
    }
}
