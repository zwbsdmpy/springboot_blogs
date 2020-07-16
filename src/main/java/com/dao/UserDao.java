package com.dao;

import com.domain.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao {
    public User userLogin (String account, String password);

    public boolean registerUser (User user);

    public boolean updateUserByAccount (String user);

    public boolean deleteUserByAccount (String userAccount);

    public User getUserById (int userId);

    public User getUserByAccount (String userAccount);

    public List<User> getUserList ();
}
