package com.domain;

import lombok.Data;

@Data
public class Replay {

    private long replayId;
    private long articleId;
    private String content;
    private long owner;
}
