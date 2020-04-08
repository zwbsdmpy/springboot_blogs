package com.dao;

import com.domain.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao {
    public boolean addUser(User user);

    public boolean updateUserByAccount(String user);

    public boolean deleteUserByAccount(String userAccount);

    public User getUserById(int userId);

    public User getUserByName(String userName);

    public List<User> getUserList();

}
