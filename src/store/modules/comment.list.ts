import {
  COMMENT_LIST,
  SUCCESS_ADD_COMMENT,
  SUCCESS_ADD_REPLY,
  GET_COMMENT_LIST_FAILURE,
} from '@/store/types';
import { getFrontCommentList, addNewComment, addNewReply } from '@/service/comment';

const state = {
  isFetching: false,
  items: [],
};

const actions = {
  async getCommentList({ commit }: any, id:any) {
    try {
      const response = await getFrontCommentList({ id });
      commit(COMMENT_LIST, { commentList: response.data.data });
    } catch (e) {
      commit(GET_COMMENT_LIST_FAILURE);
    }
  },

  async addComment({ commit, dispatch }:any, data:any) {
    const errMsg = null;
    try {
      const response = await addNewComment(data);
      dispatch('showMsg', '添加评论成功!');
      commit(SUCCESS_ADD_COMMENT, { comment: response.data.data });
    } catch (e) {
      dispatch('showMsg', e || '添加评论失败!');
    }
  },

  async addReply({ commit, dispatch }:any, { cid, data }:any) {
    try {
      const response = await addNewReply({ cid, data });
      dispatch('showMsg', '添加回复成功!');
      commit(SUCCESS_ADD_REPLY, { cid, replys: response.data.data });
    } catch (e) {
      dispatch('showMsg', e || '添加回复失败!');
    }
  },
};


const mutations = {
  [COMMENT_LIST](state:any, action:any) {
    state.items = action.commentList;
  },
  [SUCCESS_ADD_COMMENT](state:any, action:any) {
    state.items.push(action.comment);
  },
  [SUCCESS_ADD_REPLY](state:any, action:any) {
    state.items = state.items.map((item:any) => {
      if (item._id === action.cid) {
        item.replys = action.replys;
      }
      return item;
    });
  },
  [GET_COMMENT_LIST_FAILURE](state:any) {
    state.isFetching = false;
    state.items = [];
  },
};

export default {
  state,
  actions,
  mutations,
};
