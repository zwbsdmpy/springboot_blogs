package com.dao;

import com.domain.Article;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author zwbsdmpy
 */
@Repository
public interface ArticleDao {
    public boolean addArticle (Article article);

    public List<Article> getArticles ();

    public List<Article> getArticlesByOwner (int owner);

    public List<Article> queryArticles (String title, int owner);

    public boolean deleteArticleById (int id);

    public boolean upDateArticleById (Article article);
}
