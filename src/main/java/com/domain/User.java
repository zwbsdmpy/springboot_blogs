package com.domain;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.util.JsonUtil;
import lombok.Data;
import lombok.ToString;

import java.sql.Date;

@Data
public class User {
    // 用户ID
    private int userId;
    // 账号
    private String userAccount;
    private String password;
    private String userEmail;
    // 用户昵称
    private String userName;
    // 头像
    private String userAvatar;
    // 创建日期
    private java.sql.Date createTime;
    // 最后一次更新日期
    private java.sql.Date updateTime;
    // 最后一次登录日期
    private java.sql.Date lastLoginTime;
    // 状态
    private long status;
    // 生日
    private java.sql.Date birthday;
    // 电话
    private String telephone;
    // 身份
    private long roleId;

    public User () {
        this.createTime = new Date (System.currentTimeMillis ());
        this.updateTime = createTime;
        this.status = 0;
    }

    @Override
    public String toString () {
            return JsonUtil.obj2String (this);
    }
}
