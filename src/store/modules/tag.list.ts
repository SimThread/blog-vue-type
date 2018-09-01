import { getTagList } from '@/service/tags';
import {
  GET_TAG_LIST_SUCCESS,
  GET_TAG_LIST_FAILURE,
} from '../types';

const state = {
  items: [],
};

const actions = {
  async getTagList({ commit }: { commit: any }) {
    try {
      const response = await getTagList({});
      commit(GET_TAG_LIST_SUCCESS, { tagList: response.data.data });
    } catch (e) {
      commit(GET_TAG_LIST_FAILURE);
    }
  },
};

const mutations = {
  [GET_TAG_LIST_FAILURE](state:any) {
    state.items = [];
  },
  [GET_TAG_LIST_SUCCESS](state:any, action:any) {
    state.items = action.tagList;
  },
};

export default {
  state,
  actions,
  mutations,
};
