//package com.team3.fitnutri.controllers;
//
//import com.team3.fitnutri.models.LoginRequest;
//import com.team3.fitnutri.models.User;
//import com.team3.fitnutri.services.UserService;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.web.bind.annotation.*;
//
//import java.util.List;
//
//@RestController
//@RequestMapping("/user")
//@CrossOrigin(origins = "http://localhost:3000")
//public class UsersController {
//    @Autowired
//    private UserService userService;
//
//    @Autowired
//    private PasswordEncoder passwordEncoder;
//
//    @GetMapping("/allUsers")
//    public ResponseEntity<List<User>> getAllUsers(){
//        return ResponseEntity.ok(userService.findAllUsers());
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<User> getUserById(@PathVariable Long id){
//        return ResponseEntity.ok(userService.findUserById(id));
//    }
//
//
//    @PostMapping("/createUser")
//    public ResponseEntity<User> addUser(@RequestBody User user){
//        user.setPassword(passwordEncoder.encode(user.getPassword()));
//        return ResponseEntity.ok(userService.createUser(user));
//    }
//
//    @PutMapping("/updateUser/{id}")
//    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userDate){
//        userDate.setPassword(passwordEncoder.encode(userDate.getPassword()));
//        return ResponseEntity.ok(userService.updateUser(id, userDate));
//    }
//
//    @DeleteMapping("/deleteUser/{id}")
//    public ResponseEntity<?> deleteUser(@PathVariable Long id){
//        userService.deleteUser(id);
//        return ResponseEntity.ok().build();
//    }
//
//    @PostMapping("/login")
//    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest){
//        User user = userService.findByEmail(loginRequest.getEmail());
//        if(user != null && passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())){
//            return ResponseEntity.ok().body("User authenticated successfully");
//        }else{
//            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
//        }
//    }
//}

package com.team3.fitnutri.controllers;

import com.team3.fitnutri.models.LoginRequest;
import com.team3.fitnutri.models.User;
import com.team3.fitnutri.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "*")  // Allow all origins, adjust according to your needs
public class UsersController {
    @Autowired
    private UserService userService;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @GetMapping("/allUsers")
    public ResponseEntity<List<User>> getAllUsers(){
        return ResponseEntity.ok(userService.findAllUsers());
    }

    @GetMapping("/{id}")
    public ResponseEntity<User> getUserById(@PathVariable Long id){
        return ResponseEntity.ok(userService.findUserById(id));
    }

    @PostMapping("/createUser")
    public ResponseEntity<?> addUser(@RequestBody User user){
        try {
            user.setPassword(passwordEncoder.encode(user.getPassword()));
            User createdUser = userService.createUser(user);
            return ResponseEntity.ok(createdUser);
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(e.getMessage());
        }
    }

    @PutMapping("/updateUser/{id}")
    public ResponseEntity<User> updateUser(@PathVariable Long id, @RequestBody User userData){
        userData.setPassword(passwordEncoder.encode(userData.getPassword()));
        return ResponseEntity.ok(userService.updateUser(id, userData));
    }

    @DeleteMapping("/deleteUser/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable Long id){
        userService.deleteUser(id);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest loginRequest){
        User user = userService.findByEmail(loginRequest.getEmail());
        if(user != null && passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())){
            return ResponseEntity.ok().body("User authenticated successfully");
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Invalid email or password");
        }
    }
}