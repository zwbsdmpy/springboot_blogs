package com.domain;

import lombok.Data;

import java.util.Date;

/**
 * 账号实体类
 */
@Data
public class User {
    private int user_id;

    private String user_account;

    private String password;

    private String user_name;

    private String user_avatar;

    private Date birthday;

    private String email;

    private String create_date;

    private String telephone;

    private String update_date;

    private int status;

    private String last_login_time;
}
