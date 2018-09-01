import { getPrenext } from '@/service/article';
import { PRENEXT_ARTICLE } from '../types';

const state = {
  next: {},
  prev: {},
};

const actions = {
  async getPrenext({ commit, rootState }:any, id:any) {
    const response = await getPrenext({ id, options: rootState.options.item });
    if (response.statusText === 'OK') {
      commit(PRENEXT_ARTICLE, { prenextArticle: response.data.data });
    }
    return response;
  },
};

const mutations = {
  [PRENEXT_ARTICLE](state:any, action:any) {
    state.prev = action.prenextArticle.prev || {};
    state.next = action.prenextArticle.next || {};
  },
};

export default {
  state,
  actions,
  mutations,
};
