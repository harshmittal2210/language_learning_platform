package com.example.languagelearningplatform.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.example.languagelearningplatform.model.Language;
import com.example.languagelearningplatform.service.LanguageService;
import java.util.List;

@RestController
public class LanguageController {

    private final LanguageService languageService;

    public LanguageController(LanguageService languageService) {
        this.languageService = languageService;
    }

    @GetMapping("/languages")
    public List<Language> getLanguages() {
        return languageService.getLanguages();
    }
}
