package com.example.languagelearningplatform.controller;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import com.example.languagelearningplatform.model.User;
import com.example.languagelearningplatform.service.ProgressService;

@RestController
public class ProgressController {

    private final ProgressService progressService;

    public ProgressController(ProgressService progressService) {
        this.progressService = progressService;
    }

    @GetMapping("/progress")
    public String getProgress(User user) {
        return progressService.getProgress(user);
    }
}
