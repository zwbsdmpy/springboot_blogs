package com.springboot_blog.database;

import com.SpringbootBlogApplication;
import com.dao.UserDao;
import com.domain.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = SpringbootBlogApplication.class)
public class UserTest {
    @Autowired
    UserDao userDao;

    @Test
    public void addUserTest() {
    }

    @Test
    public void getUsers() {
        List<User> userList = userDao.getUserList();
        userList.forEach(user -> {
            System.out.println(user);
        });
        System.out.println(userList);
    }
}
