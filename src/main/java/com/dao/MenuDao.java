package com.dao;

import com.domain.Menu;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MenuDao {
    public boolean addMenu (Menu menu);

    public List<Menu> getMenus ();

    public List<Menu> getMenuByOwner (int owner);

    public boolean deleteMenuById (int id);

    public boolean upDateMenuById (Menu menu);
}
