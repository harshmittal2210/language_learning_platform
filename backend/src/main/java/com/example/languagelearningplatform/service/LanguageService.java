package com.example.languagelearningplatform.service;

import org.springframework.stereotype.Service;
import java.util.List;
import com.example.languagelearningplatform.model.Language;
import com.example.languagelearningplatform.repository.LanguageRepository;

@Service
public class LanguageService {

    private final LanguageRepository languageRepository;

    public LanguageService(LanguageRepository languageRepository) {
        this.languageRepository = languageRepository;
    }

    public List<Language> getLanguages() {
        return languageRepository.findAll();
    }
}
