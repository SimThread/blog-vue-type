<template>
  <div>
    <div class="container-fluid main-box">
      <div class="row">
        <Sidebar :index-img="indexImg"></Sidebar>
        <div class="col-sm-7 col-sm-offset-3 main-content">
          <Tags
            @change="handleChange"
            :tag-list="tagList"
            :options="options"
            :is-fetching="isFetching"></Tags>
          <Articles :article-list="articleList"></Articles>
          <Loadmore
            @addData="handleChange"
            v-if="articleList.length > 0 && isMore"
            :options="options"
            :is-more="isMore"
            :is-fetching="isFetching"></Loadmore>
        </div>
      </div>
    </div>
    <Footerbar></Footerbar>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import Sidebar from './sidebar.vue';
import Tags from './tags.vue';
import Articles from './articles.vue';
import Loadmore from './loadmore.vue';
import Footerbar from './footer.vue';

@Component({
  components: {
  Sidebar,
  Footerbar,
  Tags,
  Articles,
  Loadmore, }
  })
export default class Home extends Vue {
  @State(({ globalVal }) => globalVal.indexImg) indexImg:any
  @State(({ tagList }) => tagList.items) tagList:any
  @State(({ options }) => options.item) options:any
  @State(({ articleList }) => articleList.items) articleList:any
  @State(({ articleList }) => articleList.isMore) isMore:any
  @State(({ articleList }) => articleList.isFetching) isFetching:any

  @Action getIndexImage:any
  @Action getTagList:any
  @Action changeOptions:any
  @Action getArticleList:any

  created() {
    if (this.indexImg === '') {
      this.getIndexImage();
    }
    if (this.tagList.length < 1) {
      this.getTagList();
    }
    if (this.articleList.length < 1) {
      this.getArticleList({ options: this.options });
    }
  }

  handleChange(options:any, isAdd=false) {
    this.changeOptions(options);
    this.getArticleList({ options: this.options, isAdd });
  }
}
</script>
