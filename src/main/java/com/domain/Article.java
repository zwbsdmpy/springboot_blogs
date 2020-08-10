package com.domain;

import lombok.Data;

/**
 * @author zwbsdmpy
 */
@Data
public class Article {
    private int articleId;
    private int userId;
    private String articleTitle;
    private String content;
    private int scanCount;
    private int likesCount;
    private int replyCount;
}
