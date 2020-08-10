package com.service;

import com.dao.MenuDao;
import com.domain.Menu;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {
    private final MenuDao menuDao;

    public MenuService (MenuDao menuDao) {
        this.menuDao = menuDao;
    }

    public List<Menu> getUserMenu (int userId) {
        return menuDao.getMenuByOwner (userId);
    }
}
