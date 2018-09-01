import {
  SHOW_MSG,
  HIDE_MSG,
} from '../types';

const state = {
  message: {
    type: '',
    content: '',
    title: '',
  },
};

const mutations = {
  [SHOW_MSG](state: any, action: any) {
    state.message = { ...action };
  },
  [HIDE_MSG](state: any, action: any) {
    state.message = {
      type: '',
      content: '',
      title: '',
    };
  },
};

export default {
  state,
  mutations,
};
