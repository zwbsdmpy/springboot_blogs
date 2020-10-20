package com;

import org.mybatis.spring.annotation.MapperScan;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan ("com.dao")
public class SpringbootBlogApplication {
    private static final Logger LOGGER = LoggerFactory.getLogger (SpringbootBlogApplication.class);

    public static void main (String[] args) {
        try {
            SpringApplication.run (SpringbootBlogApplication.class, args);
        } catch (Exception e) {
            LOGGER.error (String.valueOf (e));
        }
    }
}
