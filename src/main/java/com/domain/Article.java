package com.domain;

import lombok.Data;

@Data
public class Article {
    private int articleId;
    private int owner;
    private String ariticleTitle;
    private String content;
    private int likesNum;
    private int scanNum;
    private int replyId;
}
