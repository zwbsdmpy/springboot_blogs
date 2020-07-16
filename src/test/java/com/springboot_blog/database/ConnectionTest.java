/**
 * FileName: ConnectionTest
 * Author:   zwbsdmpy
 * Date:     2020/1/27 4:03
 * Description:
 * History:
 */
package com.springboot_blog.database;

import org.apache.tomcat.jdbc.pool.DataSource;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

import java.sql.Connection;
import java.sql.SQLException;

/**
 * 〈数据库连接测试〉
 *
 * @author zwb
 * @create 2020/1/27
 * @since 1.0.0
 */

@SpringBootTest
@RunWith(SpringRunner.class)
public class ConnectionTest {
    @Autowired
    private DataSource dataSource;

    @Test
    public void springDataSourceTest() {
        Connection connection = null;
        System.out.println(dataSource.getClass());
        try {
            connection = dataSource.getConnection();
        } catch (SQLException e) {
            System.out.println ("连接失败！！！！");
            e.printStackTrace();
        } finally {
            try {
                if (connection != null) {
                    connection.close();
                }
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
}
