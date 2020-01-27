/**
 * FileName: LoggerTest
 * Author:   zwbsdmpy
 * Date:     2020/1/27 22:41
 * Description:
 * History:
 */
package com.springboot_blog.log;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

/**
 * 〈〉
 *
 * @author zwb
 * @create 2020/1/27
 * @since 1.0.0
 */

@RunWith(SpringRunner.class)
@SpringBootTest
public class LoggerTest {
    private Logger logger = LoggerFactory.getLogger(LoggerTest.class);

    @Test
    public void testLog() {
        logger.trace("这是 info 级别");
        logger.debug("这是 debug 级别");
        logger.info("这是 info 级别");
        logger.warn("这是 warn 级别");
        logger.error("这是 error 级别");
    }
}
