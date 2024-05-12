package com.example.languagelearningplatform.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.example.languagelearningplatform.model.Language;

public interface LanguageRepository extends JpaRepository<Language, Long> {
    // No custom methods required
}
