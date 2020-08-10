package com.service;

import com.dao.UserDao;
import com.domain.Menu;
import com.domain.User;
import com.model.LoginUser;
import com.model.UserResource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    private MenuService menuService;

    private final UserDao userDao;

    public UserService (UserDao userDao) {
        this.userDao = userDao;
    }

    public String login (LoginUser loginUser) {
        User user = userDao.userLogin (loginUser.getAccount (), loginUser.getPassword ());
        if (user == null) {
            return "用户不存在";
        }
        List<Menu> menuList = menuService.getUserMenu (user.getUserId ());
        UserResource rspContent = new UserResource ();

        rspContent.setUser (user);
        rspContent.setMenus (menuList);
        return user.toString ();
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
