const data = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: '示例',
    path: '/table',
    component: './Table',
  },
  {
    name: '测试',
    path: '/',
    routes: [
      {
        path: 'Test1',
        name: '产品列表',
        component: 'Test',
      },
      {
        path: 'Test2',
        name: '新建产品',
        component: 'Home',
      },
    ],
  },
];

export default {
  'GET /api/system/routes': {
    code: 200,
    msg: '请求成功',
    data,
  },
  //   'GET /api/v1/queryUserList': (req: any, res: any) => {
  //     res.json({
  //       success: true,
  //       data: { list: users },
  //       errorCode: 0,
  //     });
  //   },
};
