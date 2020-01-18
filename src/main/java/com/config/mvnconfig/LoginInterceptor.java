package com.config.mvnconfig;

import org.springframework.lang.Nullable;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

@Component
public class LoginInterceptor implements HandlerInterceptor {
    @Override
    public boolean preHandle (HttpServletRequest request, HttpServletResponse response, Object handler) throws IOException {
        String uri = request.getRequestURI ();
        if (uri.startsWith ("/rest")) {
            Object user = request.getSession ();
            response.sendRedirect (request.getContextPath () + uri);
        }
        return true;
    }

    @Override
    public void postHandle (HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable ModelAndView modelAndView) throws Exception {

    }

    @Override
    public void afterCompletion (HttpServletRequest request, HttpServletResponse response, Object handler, @Nullable Exception ex) throws Exception {
    }
}
