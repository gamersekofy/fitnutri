package com.team3.fitnutri.controllers;

import com.team3.fitnutri.models.Workout;
import com.team3.fitnutri.services.WorkoutService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/workout")
public class WorkoutController {
    @Autowired
    private WorkoutService workoutService;

    @GetMapping("/allWorkouts")
    public ResponseEntity<List<Workout>> getAllWorkouts() {
        return ResponseEntity.ok(workoutService.findAllWorkouts());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Workout> getWorkoutById(@PathVariable int id) {
        return ResponseEntity.ok(workoutService.findWorkoutById(id));
    }

    @PostMapping("/createWorkout")
    public ResponseEntity<Workout> addWorkout(@RequestBody Workout workout) {
        return ResponseEntity.ok(workoutService.createWorkout(workout));
    }

    @PutMapping("/updateWorkout/{id}")
    public ResponseEntity<Workout> updateWorkout(@PathVariable int id, @RequestBody Workout workoutData) {
        return ResponseEntity.ok(workoutService.updateWorkout(id, workoutData));
    }

    @DeleteMapping("/deleteWorkout/{id}")
    public ResponseEntity<?> deleteWorkout(@PathVariable int id) {
        workoutService.deleteWorkout(id);
        return ResponseEntity.ok().build();
    }
}