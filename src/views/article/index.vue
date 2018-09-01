<template>
  <div class="article-box">
    <ArtickeContent :article-detail="articleDetail"></ArtickeContent>
    <Like
      @toggleLike="handleToggleLike"
      :like-count="articleDetail.like_count"
      :is-like="articleDetail.isLike"></Like>
    <Prenext :prev-article="prevArticle" :next-article="nextArticle"></Prenext>
    <Comment
      @openLoginModal="openLoginModal"
      @submitComment="handleSubmitComment"
      @submitReply="handleSubmitReply"
      :comment-list="commentList"
      :user="user"></Comment>
    <Loginmodal ref='modal'></Loginmodal>
    <Scrolltop></Scrolltop>
  </div>
</template>

<script lang="ts">
import Scrolltop from '@/components/Scrolltop/index.vue';
import Loginmodal from '@/views/login/modal.vue';
import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
import { State, Getter, Mutation, Action } from 'vuex-class';
import ArtickeContent from './content.vue';
import Comment from './comment.vue';
import Prenext from './prenext.vue';
import Like from './like.vue';

@Component({
  components: {
  ArtickeContent,
  Like,
  Prenext,
  Comment,
  Scrolltop,
  Loginmodal, }
  })
export default class Article extends Vue {
  @State(({ articleDetail }) => articleDetail.item) articleDetail:any
  @State(({ auth }) => auth.user) user:any
  @State(({ prenextArticle }) => prenextArticle.next) nextArticle:any
  @State(({ prenextArticle }) => prenextArticle.prev) prevArticle:any
  @State(({ commentList }) => commentList.items) commentList:any
  @State(({ options }) => options.item) options:any
  @State(({ route }) => route.params.aid) aid:any

  @Action getArticleDetail:any
  @Action getPrenext:any
  @Action getCommentList:any
  @Action toggleLike:any
  @Action addComment:any
  @Action addReply:any

  created() {
    this.initData();
  }

  @Watch('$route')
  initData() {
    const { aid } = this.$route.params;
    this.getPrenext(aid);
    this.getCommentList(aid);
    this.getArticleDetail({ id: aid, user: this.user });
  }

  openLoginModal() {
    const {
      modal }:any = this.$refs;
    modal.showModal();
  }

  handleToggleLike() {
    if (this.user) {
      this.toggleLike(this.$route.params.aid);
    }
  }

  handleSubmitComment(content:any) {
    if (this.user && content.trim() !== '') {
      this.addComment({ aid: this.$route.params.aid, content });
    } else {
      this.openLoginModal();
    }
  }

  handleShowReply(content:any) {
    // 判断是否登录.未登录则弹出登录框.
    if (this.user && content.trim() !== '') {
      this.addComment({ aid: this.$route.params.aid, content });
    } else {
      this.openLoginModal();
    }
  }

  handleSubmitReply(cid:any, content:any) {
    if (this.user && content.trim() !== '') {
      this.addReply({ cid, data: { content } });
    } else {
      this.openLoginModal();
    }
  }
}
</script>
