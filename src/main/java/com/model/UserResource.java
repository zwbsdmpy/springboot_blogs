package com.model;

import com.domain.Menu;
import com.domain.User;
import lombok.Data;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Data
public class UserResource {
    private User user;

    private List<Menu> menus;
}
