package com.team3.fitnutri.services;

import com.team3.fitnutri.models.User;
import com.team3.fitnutri.repositories.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
    }

    public List<User> findAllUsers() {
        return userRepository.findAll();
    }

    public User findUserById(Long id) {
        Optional<User> user = userRepository.findById(id);
        return user.orElse(null);
    }

    public User findByEmail(String email) {
        return userRepository.findByEmail(email);
    }

    public User createUser(User user) {
        return userRepository.save(user);
    }

    public User updateUser(Long id, User userData) {
        return userRepository.findById(id)
                .map(user -> {
                    user.setFirst_name(userData.getFirst_name());
                    user.setLast_name(userData.getLast_name());
                    user.setEmail(userData.getEmail());
                    user.setAge(userData.getAge());
                    user.setDateOfBirth(userData.getDateOfBirth());
                    user.setWeight(userData.getWeight());
                    user.setHeight(userData.getHeight());
                    user.setGender(userData.getGender());
                    return userRepository.save(user);
                }).orElseThrow(() -> new RuntimeException("User not found with id " + id));
    }

    public void deleteUser(Long id) {
        userRepository.deleteById(id);
    }
}

//package com.team3.fitnutri.services;
//
//import com.team3.fitnutri.models.User;
//import com.team3.fitnutri.repositories.UserRepository;
//import org.springframework.security.crypto.password.PasswordEncoder;
//import org.springframework.stereotype.Service;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class UserService {
//    private final UserRepository userRepository;
//    private final PasswordEncoder passwordEncoder;
//
//    public UserService(UserRepository userRepository, PasswordEncoder passwordEncoder) {
//        this.userRepository = userRepository;
//        this.passwordEncoder = passwordEncoder;
//    }
//
//    public List<User> findAllUsers() {
//        return userRepository.findAll();
//    }
//
//    public User findUserById(Long id) {
//        Optional<User> user = userRepository.findById(id);
//        return user.orElse(null);
//    }
//
//    public User findByEmail(String email) {
//        return userRepository.findByEmail(email);
//    }
//
//    public User createUser(User user) {
//        return userRepository.save(user);
//    }
//
//    public User updateUser(Long id, User userData) {
//        return userRepository.findById(id)
//                .map(user -> {
//                    user.setFirst_name(userData.getFirst_name());
//                    user.setLast_name(userData.getLast_name());
//                    user.setEmail(userData.getEmail());
//                    user.setPassword(passwordEncoder.encode(userData.getPassword()));
//                    // Other fields...
//                    return userRepository.save(user);
//                }).orElseThrow(() -> new RuntimeException("User not found with id " + id));
//    }
//
//    public void deleteUser(Long id) {
//        userRepository.deleteById(id);
//    }
//}
