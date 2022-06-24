import { defineConfig } from 'umi';

export default defineConfig({
  // nodeModulesTransform: {
  //   type: 'none',
  // },
  routes: [
    { exact: true, path: '/NoLayout', component: '@/pages/NoLayout' },
    {
      exact: false,
      path: '/',
      component: '@/layouts/index',
      routes: [
        { exact: true, path: '/DragList', component: '@/pages/drag' },
        { exact: true, path: '/Forward', component: '@/pages/forward' },
        { exact: true, path: '/render', component: '@/pages/render' },
        { exact: true, path: '/ExportExcel', component: '@/pages/exportExcel' },
        { exact: true, path: '/ExportPdf', component: '@/pages/exportPdf' },
        { exact: true, path: '/Exam', component: '@/pages/Exam' },
        {
          exact: true,
          path: '/LineMove',
          component: '@/pages/LineMove/LineMove',
        },
        {
          exact: true,
          path: '/MouseLine',
          component: '@/pages/LineMove/MouseLine',
        },
        { exact: true, path: '/Colors', component: '@/pages/Colors' },
        {
          exact: true,
          path: '/ClassContext',
          component: '@/pages/ClassContext',
        },
        { exact: true, path: '/Ts', component: '@/pages/Ts' },
        { exact: true, path: '/Memo', component: '@/pages/react/memo' },
        { exact: true, path: '/Test', component: '@/pages/react/test' },
        { exact: true, path: '/DynamicTest', component: '@/pages/umi-dynamic' },
        { exact: true, path: '/TableDrag', component: '@/pages/TableDrag' },
        { exact: true, path: '/', redirect: '/render' },
      ],
    },
  ],
  // fastRefresh: {},
  /* proxy: {
    '/api': {
      target: 'http://localhost:3000',
      source: false,
    }
  } */
  dva: {
    hmr: true,
    disableModelsReExport: true,
    lazyLoad: true,
  },
  chainWebpack(config) {
    config.module
      .rule('xml-loader')
      .test(/\.xml$/i)
      .use('xml-loader')
      .loader('xml-loader');
  },
});
