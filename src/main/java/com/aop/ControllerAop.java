package com.aop;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;

@Component
@Aspect
public class ControllerAop {
    private static final Logger LOGGER = LoggerFactory.getLogger (ControllerAop.class);

    @Pointcut ("execution(public * com.controller..*(..))")
    public void controllerLog () {
    }

    @Before ("controllerLog()")
    public void before (JoinPoint joinPoint) {
        ServletRequestAttributes attributes = (ServletRequestAttributes) RequestContextHolder.getRequestAttributes ();
        HttpServletRequest request = attributes.getRequest ();
        LOGGER.info ("get {} {} from {}, Class method is :{}.{}",
                request.getRequestURI (), request.getMethod (), request.getRemoteAddr (),
                joinPoint.getSignature ().getDeclaringTypeName (), joinPoint.getSignature ().getName ());
    }

    @AfterReturning (returning = "ret", pointcut = "controllerLog()")
    public void after (Object ret) {
        LOGGER.info ("controller is finished,handle ret is :{}", ret);
    }
}
