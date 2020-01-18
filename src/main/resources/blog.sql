CREATE TABLE `account` (
`id` int(11) NOT NULL COMMENT '唯一标识',
`account` varchar(255) NOT NULL COMMENT '账号',
`password` varchar(255) NOT NULL COMMENT '密码',
`user_name` varchar(255) NOT NULL COMMENT '用户名',
`birthday` date NULL COMMENT '出生日期',
`create_date` timestamp(255) NOT NULL COMMENT '创建日期',
PRIMARY KEY (`id`) 
)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_bin;

CREATE TABLE `role` (
);

