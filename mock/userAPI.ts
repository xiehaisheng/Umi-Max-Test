const users = [
  { id: 0, name: '鑫鹏', nickName: 'U', gender: 'MALE' },
  { id: 1, name: '琦玉', nickName: 'B', gender: 'FEMALE' },
];

const userInfo = { id: 0, name: '鑫鹏', nickName: 'U', gender: 'MALE' };

export default {
  'GET /api/v1/queryUserInfo': (req: any, res: any) => {
    res.json({
      success: true,
      data: userInfo,
      errorCode: 0,
    });
  },
  'GET /api/v1/queryUserList': (req: any, res: any) => {
    res.json({
      success: true,
      data: { list: users },
      errorCode: 0,
    });
  },
  'PUT /api/v1/user/': (req: any, res: any) => {
    res.json({
      success: true,
      errorCode: 0,
    });
  },
};
