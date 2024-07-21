// src/main/java/com/hackaThon/rayne/controller/ChatController.java
package com.hackaThon.rayne.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ChatController {

    @Value("${openai.api.key}")
    private String openaiApiKey;

    @PostMapping("/api/chat")
    public ResponseEntity<Map<String, String>> chatWithOpenAI(@RequestBody Map<String, String> request) {
        String userMessage = request.get("message");
        String openaiResponse = getOpenAIResponse(userMessage);
        Map<String, String> response = new HashMap<>();
        response.put("response", openaiResponse);
        return ResponseEntity.ok(response);
    }

    private String getOpenAIResponse(String message) {
        String url = "https://api.openai.com/v1/chat/completions";
        RestTemplate restTemplate = new RestTemplate();
        Map<String, Object> requestBody = new HashMap<>();
        requestBody.put("model", "gpt-3.5-turbo");
        requestBody.put("messages", List.of(Map.of("role", "user", "content", message)));

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization", "Bearer " + openaiApiKey);
        headers.setContentType(MediaType.APPLICATION_JSON);

        HttpEntity<Map<String, Object>> entity = new HttpEntity<>(requestBody, headers);

        ResponseEntity<Map> responseEntity = restTemplate.postForEntity(url, entity, Map.class);
        Map<String, Object> responseBody = (Map<String, Object>) responseEntity.getBody();

        if (responseBody != null && responseBody.containsKey("choices")) {
            List<Map<String, Object>> choices = (List<Map<String, Object>>) responseBody.get("choices");
            if (!choices.isEmpty() && choices.get(0).containsKey("message")) {
                Map<String, Object> messageContent = (Map<String, Object>) choices.get(0).get("message");
                return (String) messageContent.get("content");
            }
        }
        return "I'm sorry, I couldn't process your request.";
    }
}
