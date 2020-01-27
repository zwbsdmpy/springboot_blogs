package com.dao;

import com.domain.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao {
    public boolean addUser(User user);

    public boolean updateUserByAccount(User user);

    public boolean deleteUserByAccount(String user_account);

    public User getUserMessageByAccount(String user_account);

    public List<User> getUserList();

}
