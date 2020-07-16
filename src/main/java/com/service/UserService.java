package com.service;

import com.dao.UserDao;
import com.domain.User;
import com.model.LoginUser;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private UserDao userDao;

    public String Login (LoginUser loginUser) {
        try {
            User user = userDao.userLogin (loginUser.getAccount (), loginUser.getPassword ());
            if (user == null) {
                return "用户不存在";
            }
            return user.toString ();
        } catch (Exception e) {
            return "exception";
        }
    }

    public User getUserMessage (String userMessage) {
        if (Integer.getInteger (userMessage) != null) {
            return userDao.getUserById (Integer.getInteger (userMessage));
        } else {
            return userDao.getUserByAccount (userMessage);
        }
    }

    public List<User> getUserList () {
        return userDao.getUserList ();
    }

    public boolean registerUser (User user) {
        return userDao.registerUser (user);
    }
}
