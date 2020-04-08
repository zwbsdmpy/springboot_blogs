package com.service;

import com.dao.UserDao;
import com.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public User getUserMessage (String userMessage) {
        if (Integer.getInteger (userMessage) != null) {
            return userDao.getUserById (Integer.getInteger (userMessage));
        } else {
            return userDao.getUserByName (userMessage);
        }
    }

    public List<User> getUserList () {
        return userDao.getUserList ();
    }

    public boolean addUser (User user) {
        return userDao.addUser (user);
    }
}
