package com.controller;

import com.domain.Menu;
import com.service.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.List;

@Controller
@RequestMapping ("/rest/blogs/menu/")
public class MenuController {
    @Autowired
    private MenuService menuService;

    @GetMapping ("siderMenuList")
    public List<Menu> getSiderMenuData () {
        System.out.println ("get");
        return null;
    }

    @PutMapping ("siderMenuList")
    public List<Menu> addSiderMenuData () {
        return null;
    }

    @DeleteMapping ("siderMenuList")
    public List<Menu> deleteSiderMenuData () {
        return null;
    }
}
