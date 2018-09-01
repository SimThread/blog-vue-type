import { CHANGE_OPTIONS } from '../types';

const state = {
  item: {
    currentPage: 1,
    itemsPerPage: 10,
    sortName: 'publish_time',
    tagId: '',
  },
};

const actions = {
  changeOptions({ commit }:any, options:any) {
    commit(CHANGE_OPTIONS, { options });
  },
};

const mutations = {
  [CHANGE_OPTIONS](state:any, action:any) {
    state.item = { ...state.item, ...action.options };
  },
};

export default {
  state,
  actions,
  mutations,
};
