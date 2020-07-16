package com.springboot_blog.base;

import com.model.LoginUser;
import org.junit.Test;
import com.fasterxml.jackson.databind.ObjectMapper;

import java.io.IOException;

public class JsonPare {
    @Test
    public void jsonParse () {
        String json = "{\"account\":\"zwbsdmpy\",\"password\":\"zwbsdmpy\"}";
        ObjectMapper objectMapper = new ObjectMapper ();
        try {
            Object object = objectMapper.readValue (json, LoginUser.class);
            System.out.println (object);
        } catch (IOException e) {
            e.printStackTrace ();
        }
    }
}
