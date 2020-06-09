package com.springboot_blog.database;

import com.dao.ArticleDao;
import com.domain.Article;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@SpringBootTest
@RunWith (SpringRunner.class)
@MapperScan (basePackages = {"com.dao"})
public class ArticleTest {
    @Autowired
    ArticleDao articleDao;
}
