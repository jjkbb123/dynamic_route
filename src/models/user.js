// import getUserInfo from '@/services/user';

const UserModel = {
  namespace: 'user',
  state: {
    userInfo: {},
    isFetchedUser: true,
    platformInfo: {},
  },

  effects: {
    *getUserInfo(_, { call, put }) {
      const res = yield call(getUserInfo);
      if (res) {
        yield put({
          type: 'updateUserInfo',
          payload: res,
        });
      }
    },
  },

  reducers: {
    updateUserInfo(state, { payload }) {
      return {
        ...state,
        userInfo: payload,
        isFetchedUser: true,
      };
    },
  },
};

export default UserModel;
