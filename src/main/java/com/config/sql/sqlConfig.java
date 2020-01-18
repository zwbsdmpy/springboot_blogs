package com.config.sql;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;


@Configuration
@ConfigurationProperties (prefix = "spring.datasource")
@PropertySource ("application.yaml")
public class sqlConfig {
    private String url;
    private String driverClassName;
    private String username;
    private String password;

    @Bean
    public DataSource getDataSource () {
        DataSource dataSource = new DataSource ();
        dataSource.setDriverClassName (driverClassName);
        dataSource.setUrl (url);
        dataSource.setUsername (username);// 用户名
        dataSource.setPassword (password);// 密码
        return dataSource;
    }
}
