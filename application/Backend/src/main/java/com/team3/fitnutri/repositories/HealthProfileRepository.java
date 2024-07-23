package com.team3.fitnutri.repositories;

import com.team3.fitnutri.models.HealthProfile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface HealthProfileRepository extends JpaRepository<HealthProfile, Long> {
}