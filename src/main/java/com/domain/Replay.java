package com.domain;

import lombok.Data;

@Data
public class Replay {
    private int replayId;
    private int articleId;
    private String content;
    private int owner;
}
