import { defineConfig } from '@umijs/max';
import routes from './config/routes';
import proxy from './config/proxy';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '社区管理平台',
  },
  proxy: proxy['proxy'],
  routes,
  npmClient: 'npm',
});
