import {
  CHANGE_STYLE_MODE,
  GET_INDEX_IMG,
  GET_CAPTCHAURL,
} from '@/store/types';
import { getCookie, saveCookie } from '@/utils/authService';

const API_ROOT = process.env.VUE_APP_API_ROOT;

const state = {
  indexImg: '',
  styleMode: getCookie('styleMode') || 'day-mode',
  captchaUrl: `${API_ROOT}users/getCaptcha?`,
};

const mutations = {
  [CHANGE_STYLE_MODE](state:any) {
    state.styleMode = (state.styleMode === 'day-mode')?'night-mode':'day-mode';
    saveCookie('styleMode', state.styleMode);
  },
  [GET_INDEX_IMG](state:any, action:any) {
    state.indexImg = action.indexImg;
  },
  [GET_CAPTCHAURL](state:any) {
    state.captchaUrl = `${API_ROOT}users/getCaptcha?${Math.random()}`;
  },
};

export default {
  state,
  mutations,
};
