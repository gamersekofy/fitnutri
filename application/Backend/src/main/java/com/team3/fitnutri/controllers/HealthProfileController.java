package com.team3.fitnutri.controllers;

import com.team3.fitnutri.models.HealthProfile;
import com.team3.fitnutri.services.HealthProfileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/healthProfile")
public class HealthProfileController {
    @Autowired
    private HealthProfileService healthProfileService;

    @GetMapping("/allHealthProfiles")
    public ResponseEntity<List<HealthProfile>> getAllHealthProfiles() {
        return ResponseEntity.ok(healthProfileService.findAllHealthProfiles());
    }

    @GetMapping("/{id}")
    public ResponseEntity<HealthProfile> getHealthProfileById(@PathVariable Long id) {
        return ResponseEntity.ok(healthProfileService.findHealthProfileById(id));
    }

    @PostMapping("/createHealthProfile")
    public ResponseEntity<HealthProfile> addRecipe(@RequestBody HealthProfile healthProfile) {
        return ResponseEntity.ok(healthProfileService.createHealthProfile(healthProfile));
    }

    @PutMapping("/updateHealthProfile/{id}")
    public ResponseEntity<HealthProfile> updateHealthProfile(@PathVariable Long id, @RequestBody HealthProfile healthProfileData) {
        return ResponseEntity.ok(healthProfileService.updateHealthProflie(id, healthProfileData));
    }

    @DeleteMapping("/deleteHealthProfile/{id}")
    public ResponseEntity<?> deleteHealthProfile(@PathVariable Long id) {
        healthProfileService.deleteHealthProfile(id);
        return ResponseEntity.ok().build();
    }
}