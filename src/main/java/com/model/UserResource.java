package com.model;

import com.domain.Menu;
import com.domain.User;
import lombok.Data;

import java.util.HashMap;
import java.util.Map;

@Data
public class UserResource {
    private User user;

    private Menu menu;

    public String toJson () {
        Map<String, Object> map = new HashMap<> ();
        map.put ("user", user);
    }
}
