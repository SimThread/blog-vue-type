import * as types from '@/store/types';
import { getApps } from '@/service/mobile';

const state = {
  items: [],
};

const actions = {
  async getApps({ commit }: any) {
    try {
      console.log('get get get Apps');
      const response = await getApps({});
      commit(types.SUCCESS_GET_APPS, { apps: response.data.data });
    } catch (e) {
      console.log('error:', e);
      commit(types.FAILURE_GET_APPS);
    }
  },
};

const mutations = {
  [types.FAILURE_GET_APPS](state: any) {
    state.items = [];
  },
  [types.SUCCESS_GET_APPS](state: any, payload: any) {
    state.items = payload.apps;
  },
};

export default {
  state,
  actions,
  mutations,
};
