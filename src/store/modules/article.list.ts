import { REQUEST_ARTICLE_LIST, GET_ARTICLE_LIST_FAILURE, ADD_ARTICLE_LIST, ARTICLE_LIST } from '@/store/types';
import { getFrontArticleList } from '@/service/article';

const state = {
  isFetching: false,
  isMore: true,
  items: [],
};

const actions = {
  async getArticleList({ commit }:any, { options, isAdd=false }:any) {
    commit(REQUEST_ARTICLE_LIST);

    try {
      const response = await getFrontArticleList(options);
      const json = response.data;
      const isMore = !(json.data.length < options.itemsPerPage);

      if (isAdd) {
        commit(ADD_ARTICLE_LIST, {
          articleList: json.data,
          isMore,
        });
      } else {
        commit(ARTICLE_LIST, {
          articleList: json.data,
          isMore,
        });
      }
    } catch (e) {
      console.log('error:', e);
      commit(GET_ARTICLE_LIST_FAILURE);
    }
  },
};

const mutations = {
  [REQUEST_ARTICLE_LIST](state:any) {
    state.isFetching = true;
  },
  [ARTICLE_LIST](state:any, action:any) {
    state.isFetching = false;
    state.isMore = action.isMore;
    state.items = action.articleList;
  },
  [GET_ARTICLE_LIST_FAILURE](state:any) {
    state.isFetching = false;
  },
  [ADD_ARTICLE_LIST](state:any, action:any) {
    state.isFetching = false;
    state.isMore = action.isMore;
    state.items = [...state.items, ...action.articleList];
  },
};

export default {
  state,
  actions,
  mutations,
};
