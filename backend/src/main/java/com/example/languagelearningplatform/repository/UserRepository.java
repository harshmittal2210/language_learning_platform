package com.example.languagelearningplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.languagelearningplatform.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByUsername(String username);
}
