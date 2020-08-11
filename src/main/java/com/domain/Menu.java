package com.domain;

import lombok.Data;

@Data
public class Menu {
    private int menuId;
    private int userId;
    private String menuType;
    private String menuData;
}
