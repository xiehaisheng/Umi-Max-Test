// 运行时配置

import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import { RunTimeLayoutConfig } from '@umijs/max';
import { message } from 'antd';
import { useState } from 'react';
import { HeaderContent } from './components/LayoutRender';
import { getRoutes, queryUserInfo } from './services/demo/UserController';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://next.umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  const { data } = await queryUserInfo();
  return { name: data.name };
}

const Layout: RunTimeLayoutConfig = () => {
  const [collapsed, setCollapsed] = useState(false);

  return {
    title: '社区管理平台',
    logo: null,
    layout: 'mix',
    collapsed: collapsed,
    menu: {
      locale: false,
      request: async () => {
        console.log('layout', 887);
        try {
          const { data } = await getRoutes();
          return data;
        } catch (error) {
          message.error('路由加载失败');
        }
      },
    },
    token: {
      sider: {
        colorMenuBackground: '#fff',
        colorMenuItemDivider: '#dfdfdf',
        colorTextMenu: '#595959',
        colorTextMenuSelected: 'rgba(42,122,251,1)',
        colorBgMenuItemSelected: 'rgba(230,243,254,1)',
      },
    },
    collapsedButtonRender: () => {
      return (
        <div
          onClick={() => setCollapsed(!collapsed)}
          style={{
            cursor: 'pointer',
            fontSize: '16px',
            display: 'flex',
            justifyContent: 'center',
            paddingBottom: '20px',
          }}
        >
          {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        </div>
      );
    },
    headerContentRender: () => <HeaderContent />,
    rightContentRender: () => <></>,
  };
};

export const layout = Layout;
