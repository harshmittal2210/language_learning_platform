package com.example.languagelearningplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

// Add repository methods if languages are stored in the database
public interface LanguageRepository extends JpaRepository<Language, Long> {
    // Add custom query methods if needed
}
