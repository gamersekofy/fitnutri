package com.team3.fitnutri.repositories;

import com.team3.fitnutri.models.Workout;
import org.springframework.data.jpa.repository.JpaRepository;

public interface WorkoutRepository extends JpaRepository<Workout, Integer> {
}
