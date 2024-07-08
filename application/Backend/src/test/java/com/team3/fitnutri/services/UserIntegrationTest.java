package com.team3.fitnutri.services;

import com.team3.fitnutri.controllers.UsersController;
import com.team3.fitnutri.models.User;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;

@SpringBootTest
public class UserIntegrationTest {

    @Autowired
    private UsersController usersController;

    @Test
    public void testAddAndRetrieveUsers() {
        User user1 = new User(); // Set user1 details
        User user2 = new User(); // Set user2 details
        usersController.addUser(user1);
        usersController.addUser(user2);

        ResponseEntity<List<User>> response = usersController.getAllUsers();
        List<User> users = response.getBody();

        assertFalse(users.isEmpty(), "User list should not be empty");
        assertEquals(2, users.size(), "There should be two users in the database");
    }
}