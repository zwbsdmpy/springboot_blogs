package com.util;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;

/**
 * Json工具类
 *
 * @author zwbsdmpy
 */
public class JsonUtil {
    private JsonUtil () {
    }

    public static String obj2String (Object object) {
        if (object == null) {
            return null;
        }
        if (object instanceof String) {
            return object.toString ();
        }
        ObjectMapper mapper = new ObjectMapper ();
        try {
            return mapper.writeValueAsString (object);
        } catch (JsonProcessingException e) {
            e.printStackTrace ();
        }
        return "";
    }
}
