package com.team3.fitnutri.services;

import com.team3.fitnutri.models.Workout;
import com.team3.fitnutri.repositories.WorkoutRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class WorkoutService {
    @Autowired
    private WorkoutRepository workoutRepository;

    public List<Workout> findAllWorkouts() {
        return workoutRepository.findAll();
    }

    public Workout findWorkoutById(int id) {
        Optional<Workout> workout = workoutRepository.findById(id);
        return workout.orElse(null);
    }

    public Workout createWorkout(Workout workout) {
        return workoutRepository.save(workout);
    }

    public Workout updateWorkout(int id, Workout workoutData) {
        Optional<Workout> existingWorkout = workoutRepository.findById(id);
        if (existingWorkout.isPresent()) {
            Workout workout = existingWorkout.get();
            workout.setName(workoutData.getName());
            workout.setDuration(workoutData.getDuration());
            workout.setIntensity(workoutData.getIntensity());
            workout.setExercises(workoutData.getExercises());
            return workoutRepository.save(workout);
        } else {
            return null;
        }
    }

    public void deleteWorkout(int id) {
        workoutRepository.deleteById(id);
    }
}