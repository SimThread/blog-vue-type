import { _get } from '@/service';
import { State } from '@/store/home/interface';
import { Commit } from 'vuex';

interface GetTodayWeatherParam {
  city: string;
}

const state: State = {
  count: 0,
  test1: [],
};

const getters = {
  count: (state: State) => state.count,
  // message: (state: State) => state.message,
};

const mutations = {
  INCREMENT(state: State, num: number) {
    state.count += num;
  },
};

const actions = {
  async getTodayWeather(context: { commit: Commit }, params: GetTodayWeatherParam) {
    return _get({
      url: '/api/weatherApi',
      params,
    });
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
