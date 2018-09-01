import {
  SUCCESS_GET_SNSLOGINS,
  FAILURE_GET_SNSLOGINS,
} from '@/store/types';
import { getSnsLogins } from '@/service/user';

const state = { items: [] };

const actions = {
  async getSnsLogins({ commit }: any) {
    try {
      const response = await getSnsLogins({});
      commit(SUCCESS_GET_SNSLOGINS, response.data.data);
    } catch (error) {
      commit(FAILURE_GET_SNSLOGINS);
    }
  },
};


const mutations = {
  [FAILURE_GET_SNSLOGINS](state:any) {
    state.items = [];
  },
  [SUCCESS_GET_SNSLOGINS](state:any, data:any) {
    state.items = data;
  },
};

export default {
  state,
  actions,
  mutations,
};
