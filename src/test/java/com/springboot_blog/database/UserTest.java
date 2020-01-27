package com.springboot_blog.database;

import com.dao.UserDao;
import com.domain.User;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.util.List;

@SpringBootTest
@RunWith(SpringRunner.class)
@MapperScan(basePackages = {"com.dao"})
public class UserTest {
    @Autowired
    UserDao userDao;

    @Test
    public void addUserTest() {
        User user = new User();
        user.setUser_id(10000);
        user.setUser_account("zwbsdmpy");
        user.setPassword("123456");
        userDao.addUser(user);
    }

    @Test
    public void getUsers() {
        List<User> userList = userDao.getUserList();
        userList.forEach(user -> {
            System.out.println(user);
        });
        System.out.println(userList);
    }

    @Test
    public void getUserByAccount() {
        User user = userDao.getUserMessageByAccount("zwbsdmpy");
        System.out.println(user);
    }

    @Test
    public void deleteUser() {
        boolean result = userDao.deleteUserByAccount("zwbsdmpy");
        System.out.println(result);
    }

    @Test
    public void updateUser() {
        User user = new User();
        user.setUser_id(10001);
        user.setUser_account("zwbsdmpy");
        user.setPassword("654321");
        boolean result = userDao.updateUserByAccount(user);
        System.out.println(result);
    }
}
