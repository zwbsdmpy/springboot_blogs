package com.domain;

import lombok.Data;

@Data
public class Article {
    private long articleId;
    private long owner;
    private String ariticleTitle;
    private String conten;
    private long likesNum;
    private long scanNum;
    private long replyId;
}
