export default {
  proxy: {
    '/new-api': {
      target: 'http://186dt.com:8000',
      changeOrigin: true,
      pathRewrite: {
        '^/new-api': '',
      },
    },
  },
};
