package com.service;

import com.dao.MenuDao;
import com.domain.Menu;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {
    @Autowired
    private MenuDao menueDao;

    public boolean addMenu (Menu menu) {
        return menueDao.addMenu (menu);
    }

    public List<Menu> getMenus () {
        return menueDao.getMenus ();
    }

    public List<Menu> getMenusByOwner (int owner) {
        return menueDao.getMenuByOwner (owner);
    }

    public boolean deleteMenuById (int id) {
        return menueDao.deleteMenuById (id);
    }

    public boolean upDateMenuById (Menu menu) {
        return menueDao.upDateMenuById (menu);
    }
}
