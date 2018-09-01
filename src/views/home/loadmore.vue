<template>
  <div class="load-more">
      <button class="ladda-button" @click.prevent="addData()">
        <span v-if="isFetching" class="ladda-spinner">
          <i class="fa fa-spinner fa-spin"></i>
        </span>
        <span v-else class="ladda-label">点击查看更多</span>
      </button>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Loadmore extends Vue {
  @Prop()
  isFetching:any
  @Prop()
  isMore:any
  @Prop()
  options:any

  addData() {
    let { currentPage } = this.options;
    this.$emit('addData', { currentPage: ++currentPage }, true);
  }
}
</script>
