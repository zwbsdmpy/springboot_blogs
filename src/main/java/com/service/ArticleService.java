package com.service;

import com.dao.ArticleDao;
import com.domain.Article;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleService {
    @Autowired
    private ArticleDao articleDao;

    public boolean addArticle (Article article) {
        articleDao.addArticle (article);
        return true;
    }

}
