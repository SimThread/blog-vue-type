import { getFrontArticle, toggleLike } from '@/service/article';
import * as types from '../types';

const state = {
  item: {},
};
// actions
const actions = {
  async getArticleDetail({ commit }: any, { id, user }: any) {
    const response = await getFrontArticle({ id });

    let isLike = false;
    const article = response.data.data;
    if (user) {
      user.likes.forEach((item:any) => {
        if (item.toString() === article._id) {
          isLike = true;
        }
      });
    }
    commit(types.ARTICLE_DETAIL, {
      articleDetail: { ...article, isLike },
    });
  },

  async toggleLike({ commit }:any, id: any) {
    const response = await toggleLike(id);
    const json = response.data;
    commit(types.TOGGLE_LIKE, {
      like_count: json.count,
      isLike: json.isLike,
    });
  },
};

const mutations = {
  [types.ARTICLE_DETAIL](state: any, action: any) {
    state.item = { ...state.item, ...action.articleDetail };
  },
  [types.TOGGLE_LIKE](state: any, action: any) {
    state.item = { ...state.item, isLike: action.isLike, like_count: action.like_count };
  },
};

export default {
  state,
  actions,
  mutations,
};
