package com.dao;

import com.domain.Menu;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @author zwbsdmpy
 */
@Repository
public interface MenuDao {
    /**
     * 添加菜单
     *
     * @param menu 菜单项
     * @return 结果
     */
    public boolean addMenu (Menu menu);

    /**
     * 获取所有菜单
     *
     * @return menuList
     */
    public List<Menu> getMenus ();

    /**
     * 检索该用户的所有菜单项
     *
     * @param userId 用户ID
     * @return menuList
     */
    public List<Menu> getMenuByOwner (int userId);

    /**
     * 删除单个菜单项
     *
     * @param menuId menuId
     * @return 是否成功
     */
    public boolean deleteMenuById (int menuId);

    /**
     * 更新菜单信息
     *
     * @param menu menu
     * @return 是否更新成功
     */
    public boolean upDateMenuById (Menu menu);
}
