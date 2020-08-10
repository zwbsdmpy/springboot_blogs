package com.controller;

import com.domain.User;
import com.model.LoginUser;
import com.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping ("/users")
public class UserController {
    @Autowired
    private UserService userService;

    @PostMapping ("/login")
    public String login (@RequestBody LoginUser loginUser) {
        return userService.login (loginUser);
    }

    @PostMapping ("/register")
    public String registerUser (@RequestBody User user) {
        boolean result = userService.registerUser (user);
        return result ? "success" : "failure";
    }
}
