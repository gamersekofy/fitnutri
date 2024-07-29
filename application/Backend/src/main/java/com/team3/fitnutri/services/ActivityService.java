package com.team3.fitnutri.services;

import com.team3.fitnutri.models.Activity;
import com.team3.fitnutri.repositories.ActivityRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ActivityService {
    @Autowired
    private ActivityRepository activityRepository;

    public List<Activity> findAllActivities() {
        return activityRepository.findAll();
    }

    public Activity findActivityById(Long id) {
        Optional<Activity> activity = activityRepository.findById(id);
        return activity.orElse(null);
    }

    public Activity createActivity(Activity activity) {
        return activityRepository.save(activity);
    }

    public Activity updateActivity(Long id, Activity activityData) {
        Optional<Activity> existingActivity = activityRepository.findById(id);
        if (existingActivity.isPresent()) {
            Activity activity = existingActivity.get();
            activity.setId(activityData.getId());
            activity.setActivityDate(activityData.getActivityDate());
            activity.setActivityType(activityData.getActivityType());
            activity.setActivityDuration(activityData.getActivityDuration());
            activity.setActivityDistance(activityData.getActivityDistance());
            activity.setCaloriesBurned(activityData.getCaloriesBurned());
            return activityRepository.save(activity);
        } else {
            return null;
        }
    }

    public void deleteActivity(Long id) {
        activityRepository.deleteById(id);
    }
}
