package com.team3.fitnutri.services;

import com.team3.fitnutri.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long>{
}
