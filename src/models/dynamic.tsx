const UserModel = {
  namespace: 'user1',
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
    *test1() {
      console.log(123);
    },
  },

  reducers: {
    test() {
      console.log(123);
      return {};
    },
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
