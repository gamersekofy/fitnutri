package com.team3.fitnutri.controllers;

import com.team3.fitnutri.models.Activity;
import com.team3.fitnutri.services.ActivityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/activity")
public class ActivityController {
    @Autowired
    private ActivityService activityService;

    @GetMapping("/allActivity")
    public ResponseEntity<List<Activity>> getAllActivities() {
        return ResponseEntity.ok(activityService.findAllActivities());
    }

    @GetMapping("/{id}")
    public ResponseEntity<Activity> getActivityById(@PathVariable Long id) {
        return ResponseEntity.ok(activityService.findActivityById(id));
    }

    @PostMapping("/createActivity")
    public ResponseEntity<Activity> addActivity(@RequestBody Activity activity) {
        return ResponseEntity.ok(activityService.createActivity(activity));
    }

    @PutMapping("/updateActivity/{id}")
    public ResponseEntity<Activity> updateActivity(@PathVariable Long id, @RequestBody Activity activityData) {
        return ResponseEntity.ok(activityService.updateActivity(id, activityData));
    }

    @DeleteMapping("/deleteActivity/{id}")
    public ResponseEntity<?> deleteActivity(@PathVariable Long id) {
        activityService.deleteActivity(id);
        return ResponseEntity.ok().build();
    }
}