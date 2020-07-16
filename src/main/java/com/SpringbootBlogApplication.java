package com;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan ("com.dao")
public class SpringbootBlogApplication {
    public static void main (String[] args) {
        SpringApplication.run (SpringbootBlogApplication.class, args);
    }
}
