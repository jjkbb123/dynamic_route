import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/DragList', component: '@/pages/drag' },
    { path: '/Forward', component: '@/pages/forward' },
    { path: '/render', component: '@/pages/render' },
    { path: '/ExportExcel', component: '@/pages/exportExcel' },
    { path: '/ExportPdf', component: '@/pages/exportPdf' },
    { path: '/Exam', component: '@/pages/Exam' },
    { path: '/', redirect: '/render' },
  ],
  fastRefresh: {},
});
