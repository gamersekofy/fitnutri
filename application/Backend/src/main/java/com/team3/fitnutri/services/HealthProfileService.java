package com.team3.fitnutri.services;

import com.team3.fitnutri.models.HealthProfile;
import com.team3.fitnutri.repositories.HealthProfileRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class HealthProfileService {
    @Autowired
    private HealthProfileRepository healthProfileRepository;

    public List<HealthProfile> findAllHealthProfiles() {
        return healthProfileRepository.findAll();
    }

    public HealthProfile findHealthProfileById(Long id) {
        Optional<HealthProfile> healthProfile = healthProfileRepository.findById(id);
        return healthProfile.orElse(null);
    }

    public HealthProfile createHealthProfile(HealthProfile healthProfile) {
        return healthProfileRepository.save(healthProfile);
    }

    public HealthProfile updateHealthProflie(Long id, HealthProfile healthProfileData) {
        Optional<HealthProfile> existingHealthProfile = healthProfileRepository.findById(id);
        if (existingHealthProfile.isPresent()) {
            HealthProfile healthProfile = existingHealthProfile.get();
            healthProfile.setGoal(healthProfileData.getGoal());
            healthProfile.setBmi(healthProfileData.getBmi());
            healthProfile.setRhr(healthProfileData.getRhr());
            healthProfile.setA1c(healthProfileData.getA1c());
            healthProfile.setDisease(healthProfileData.getDisease());
            healthProfile.setDiet(healthProfileData.getDiet());
            return healthProfileRepository.save(healthProfile);
        } else {
            return null;
        }
    }

    public void deleteHealthProfile(Long id) {
        healthProfileRepository.deleteById(id);
    }
}
