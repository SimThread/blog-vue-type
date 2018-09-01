import Vue from 'vue';
import Vuex from 'vuex';
import VuexPersistence from 'vuex-persist';
import apps from '@/store/modules/app';
import articleList from '@/store/modules/article.list';
import prenextArticle from '@/store/modules/article.prenext';
import articleDetail from '@/store/modules/article.detail';
import auth from '@/store/modules/auth';
import commentList from '@/store/modules/comment.list';
import globalVal from '@/store/modules/global.val';
import options from '@/store/modules/options';
import logins from '@/store/modules/logins';
import tagList from '@/store/modules/tag.list';
import showmsg from '@/store/modules/showmsg';
import actions from './actions';
import getters from './getters';

Vue.config.devtools = true;
Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
});

export default new Vuex.Store({
  actions,
  getters,
  modules: {
    apps,
    articleList,
    prenextArticle,
    articleDetail,
    auth,
    commentList,
    globalVal,
    options,
    logins,
    tagList,
    showmsg,
  },
  plugins: [vuexLocal.plugin],
});
