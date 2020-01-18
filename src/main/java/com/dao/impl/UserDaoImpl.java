package com.dao.impl;

import com.dao.UserDao;
import com.domain.User;
import org.springframework.stereotype.Repository;

import javax.annotation.Resource;

@Repository
public class UserDaoImpl implements UserDao {

    @Override
    public boolean addUser (User user) {
        return false;
    }

    @Override
    public boolean updateUser (String user_account) {
        return false;
    }

    @Override
    public boolean deleteUser (String user_account) {
        return false;
    }

    @Override
    public User getUserMessage (String user_account) {
        return null;
    }
}
