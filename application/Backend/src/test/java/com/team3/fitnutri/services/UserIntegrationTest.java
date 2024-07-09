package com.team3.fitnutri.services;

import com.team3.fitnutri.controllers.UsersController;
import com.team3.fitnutri.models.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.time.LocalDate;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertTrue;

@SpringBootTest
public class UserIntegrationTest {

    @Autowired
    private UsersController usersController;

    @Test
    public void testUserLifecycle() {
        // Create and add four users
        User user1 = new User("John", "Doe", "john.doe@example.com", 30, LocalDate.of(1992, 1, 1), 70.0, 175.0, "male");
        User user2 = new User("Jane", "Doe", "jane.doe@example.com", 28, LocalDate.of(1994, 2, 2), 65.0, 165.0, "female");
        User user3 = new User("Mike", "Smith", "mike.smith@example.com", 35, LocalDate.of(1987, 3, 3), 80.0, 180.0, "male");
        User user4 = new User("Anna", "Smith", "anna.smith@example.com", 32, LocalDate.of(1990, 4, 4), 60.0, 160.0, "female");
        usersController.addUser(user1);
        usersController.addUser(user2);
        usersController.addUser(user3);
        usersController.addUser(user4);

        // Update user1's details
        user1.setFirst_name("Johnathan");
        user1.setWeight(75.0);
        // Assuming updateUser takes user ID and updated user object
        usersController.updateUser(user1.getId(), user1);

        // Retrieve all users and assert the update took place
        ResponseEntity<List<User>> response = usersController.getAllUsers();
        List<User> users = response.getBody();
        assertTrue(users.stream().anyMatch(user -> "Johnathan".equals(user.getFirst_name()) && user.getWeight() == 75.0), "User details should be updated");

        // Delete all users
        users.forEach(user -> usersController.deleteUser(user.getId()));

        // Assert all users are deleted
        response = usersController.getAllUsers();
        assertTrue(response.getBody().isEmpty(), "All users should be deleted");
    }
}