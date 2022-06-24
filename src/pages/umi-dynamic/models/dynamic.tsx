import { routerRedux } from 'dva/router';
import { history } from 'umi';

export default {
  namespace: 'dynamic',
  state: {},
  effects: {
    *test(action, { call, put }) {
      console.log(123);
      yield put(routerRedux.push('/test', { data: 123 }));
    },
  },
  reducers: {},
};
