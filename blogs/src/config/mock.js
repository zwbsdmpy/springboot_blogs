import Mock from 'mockjs';

const SiderMenuData = {
    'result': 200,
    'data': [
        '所有博客',
        {
            "分类": [
                "Java",
                "Spring",
                "React",
                "数据库",
                "算法",
                "计算机网络",
                "分布式",
                "微服务",
            ]
        },
        '个人信息',
    ]
}
export default Mock.mock('/rest/blogs/siderMenuList', 'get', {
    success: true,
    message: SiderMenuData,
})
