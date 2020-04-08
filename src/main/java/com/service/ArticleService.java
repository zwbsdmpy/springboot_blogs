package com.service;

import com.dao.ArticleDao;
import com.domain.Article;
import com.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {
    @Autowired
    private ArticleDao articleDao;

    public boolean addArticle (Article article) {
        return articleDao.addArticle (article);
    }

    public List<Article> getArticles () {
        return articleDao.getArticles ();
    }

    public List<Article> getArticlesByOwner (int owner) {
        return articleDao.getArticlesByOwner (owner);
    }

    public List<Article> queryArticles (String title, int owner) {
        return articleDao.queryArticles (title, owner);
    }

    public boolean deleteArticleById (int articleId) {
        return articleDao.deleteArticleById (articleId);
    }

    public boolean upDateArticleById (Article article) {
        return articleDao.upDateArticleById (article);
    }
}
