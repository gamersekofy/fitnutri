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

    public Activity(Long id, LocalDate activityDate, Type activityType, double activityDuration, double activityDistance, int caloriesBurned, int userHeratRate) {
        this.id = id;
        this.activityDate = activityDate;
        this.activityType = activityType;
        this.activityDuration = activityDuration;
        this.activityDistance = activityDistance;
        this.caloriesBurned = caloriesBurned;
        this.userHeartRate = userHeartRate;
    }

    private enum Type {
        CARDIO, WEIGHLIFTING, MOBILITY, MINDFULNESS;
    }
}
