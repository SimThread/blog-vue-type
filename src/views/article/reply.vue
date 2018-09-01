<template>
  <div class="reply-list">
    <div v-for="(reply, i) in replys" :key="i" class="reply-item">
      <p class="reply-content">
        <a class="reply-user link-light">{{reply.user_info.nickname}}</a>：
        {{reply.content}}
      </p>
      <div class="reply-footer text-right">
        <a class="reply" href="javascript:;" @click.prevent="showReply(k,reply.user_info.nickname)" >回复</a>
        <span class="reply-time pull-left">{{ reply.created | formatDate }}</span>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Reply extends Vue {
  @Prop()
  replys:any
  @Prop()
  k:any

  showReply(k:any, nickname:any) {
    this.$emit('showReply', k, nickname);
  }
}
</script>
