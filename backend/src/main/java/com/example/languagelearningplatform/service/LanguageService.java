package com.example.languagelearningplatform.service;

import org.springframework.stereotype.Service;
import java.util.*;

@Service
public class LanguageService {

    // Method to retrieve list of supported languages
    public List<String> getSupportedLanguages() {
        return Arrays.asList("English", "Spanish", "French", "German"); // Add more languages as needed
    }
}
