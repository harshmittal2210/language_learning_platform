package com.example.languagelearningplatform.controller;

import org.springframework.web.bind.annotation.*;
import java.util.*;

@RestController
@RequestMapping("/api/languages")
public class LanguageController {

    // Endpoint to fetch list of supported languages
    @GetMapping("/supported")
    public ResponseEntity<List<String>> getSupportedLanguages() {
        List<String> supportedLanguages = Arrays.asList("English", "Spanish", "French", "German"); // Add more languages as needed
        return ResponseEntity.ok(supportedLanguages);
    }
}
