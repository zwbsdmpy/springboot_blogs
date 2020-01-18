package com.dao;

import com.domain.User;

public interface UserDao {
    public boolean addUser (User user);

    public boolean updateUser (String user_account);

    public boolean deleteUser (String user_account);

    public User getUserMessageByAccount (String user_account);
}
