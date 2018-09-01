import { ActionTree } from 'vuex';
import * as types from '@/store/types';
import { getIndexImage } from '@/service/article';

const actions: ActionTree<any, any> = {
  showMsg({ state, commit }:any, data:any) {
    commit(types.SHOW_MSG);
  },

  hideMsg({ state, commit }: any, data:any) {
    commit(types.HIDE_MSG);
  },

  changeStyleMode({ state, commit }:any, data:any) {
    commit(types.CHANGE_STYLE_MODE);
  },

  getCaptchaUrl({ state, commit }:any, data:any) {
    commit(types.GET_CAPTCHAURL);
  },

  async getIndexImage({ state, commit }:any, data:any) {
    try {
      const response = await getIndexImage({});
      // commit(types.GET_INDEX_IMG, { indexImg: response.img })
    } catch (e) {
      // return commit(types.GET_INDEX_IMG, {indexImg: img});
    }
  },
};

export default actions;
