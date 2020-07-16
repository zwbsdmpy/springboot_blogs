package com.controller;

import com.domain.User;
import com.model.LoginUser;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping ("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping ("/login")
    public String Login (@RequestBody LoginUser loginUser) {
        return userService.Login (loginUser);
    }

    @PostMapping ("/register")
    public String registerUser (@RequestBody User user) {
        boolean result = userService.registerUser (user);
        return result ? "success" : "failure";
    }
}
