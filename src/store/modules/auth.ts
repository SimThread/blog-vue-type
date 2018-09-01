import {
  LOGIN_SUCCESS,
  USERINFO_SUCCESS,
  USERINFO_FAILURE,
  LOGOUT_USER,
  UPDATE_USER_SUCCESS,
} from '@/store/types';
import { getCookie, saveCookie, signOut } from '@/utils/authService';
import router from '@/router';
import { localLogin } from '@/service/auth';
import { getMe, mdUser } from '@/service/user';

const state = {
  token: getCookie('token') || null,
  user: null,
};

const actions = {
  logout({ commit }: any) {
    signOut();
    commit(LOGOUT_USER);
    window.location.pathname = '/';
  },
  async localLogin({ dispatch, commit }: any, userInfo:any) {
    try {
      const response = await localLogin(userInfo);
      const { token } = response.data;
      saveCookie('token', token);
      dispatch('getUserInfo');
      commit(LOGIN_SUCCESS, { token });
      dispatch('showMsg', '登录成功,欢迎光临!');
      router.push({ path: '/' });
    } catch (e) {
      dispatch('getCaptchaUrl', null, { root: true });
      dispatch('showMsg', e || '登录失败', { root: true });
    }
  },
  async getUserInfo({ commit }: any) {
    try {
      const response = await getMe({});
      commit(USERINFO_SUCCESS, { user: response.data });
    } catch (e) {
      commit(USERINFO_FAILURE);
    }
  },

  async updateUser({ commit, dispatch }:any, userInfo:any) {
    try {
      const response = await mdUser(userInfo);
      commit(UPDATE_USER_SUCCESS, { user: response.data.data });
      dispatch('showMsg', '更新资料成功!');
    } catch (e) {
      dispatch('showMsg', '更新用户资料失败!');
    }
  },
};


const mutations = {
  [LOGIN_SUCCESS](state:any, action:any) {
    state.token = action.token;
  },
  [USERINFO_SUCCESS](state:any, action:any) {
    state.user = action.user;
  },
  [USERINFO_FAILURE](state:any, action:any) {
    state.user = null;
  },
  [LOGOUT_USER](state:any, action:any) {
    state.token = getCookie('token') || null;
    state.user = null;
    state.token = null;
  },
  [UPDATE_USER_SUCCESS](state:any, action:any) {
    state.user = action.user;
  },
};

export default {
  state,
  actions,
  mutations,
};
