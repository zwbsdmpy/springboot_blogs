package com.model;

import com.domain.Article;
import com.domain.Menu;
import com.domain.User;
import com.util.JsonUtil;
import lombok.Data;

import java.util.ArrayList;
import java.util.List;

/**
 * 用户资源
 *
 * @author zwbsdmpy
 */
@Data
public class UserResource {
    private User user;

    private Menu menu = new Menu ();

    private List<Article> articles = new ArrayList<> ();

    @Override
    public String toString () {
        return JsonUtil.obj2String (this);
    }
}
