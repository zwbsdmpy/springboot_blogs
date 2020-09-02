package com.controller;

import com.domain.Article;
import com.domain.Menu;
import com.service.ArticleService;
import com.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * @author zwbsdmpy
 */
@RestController
@RequestMapping ("/global")
public class CommonController {
    @Autowired
    private MenuService menuService;

    @Autowired
    private ArticleService articleService;

    private static final int GLOBAL_USER_ID = 1000;

    @GetMapping ("/menu")
    public Menu getGlobalMenu () {
        return menuService.getUserMenu (GLOBAL_USER_ID);
    }

    @GetMapping ("/article/hot")
    public List<Article> getHotArticles () {
        return articleService.getList (GLOBAL_USER_ID);
    }

    @GetMapping ("/article/new")
    public List<Article> getnewArticles () {
        return articleService.getList (GLOBAL_USER_ID);
    }
}
