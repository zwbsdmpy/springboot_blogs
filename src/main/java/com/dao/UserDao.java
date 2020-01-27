package com.dao;

import com.domain.User;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserDao {
    public boolean addUser(User user);

    public boolean updateUser(String user_account);

    public boolean deleteUser(String user_account);

    //    @Select("select * from account where user_account = #{user_account}")
    public User getUserMessageByAccount(String user_account);

    public List<User> getUserList();

}
