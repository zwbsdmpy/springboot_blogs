package com.domain;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.util.JsonUtil;
import lombok.Data;
import lombok.ToString;

import java.sql.Date;

@Data
public class User {
    private long userId;// 用户ID
    private String userAccount;// 账号
    private String password;
    private String userEmail;
    private String userName;// 用户昵称
    private String userAvatar;// 头像
    private java.sql.Date createTime;// 创建日期
    private java.sql.Date updateTime;//最后一次更新日期
    private java.sql.Date lastLoginTime;// 最后一次登录日期
    private long status;// 状态
    private java.sql.Date birthday;// 生日
    private String telephone;// 电话
    private long roleId;// 身份

    public User () {
        this.createTime = new Date (System.currentTimeMillis ());
        this.updateTime = createTime;
        this.status = 0;
    }

    @Override
    public String toString () {
        try {
            return JsonUtil.obj2String (this);
        } catch (JsonProcessingException e) {
            e.printStackTrace ();
        }
        return "";
    }
}
