<template>
  <ul class="sort-tags list-unstyled clearfix">
    <li>
      <a
        :class="{'active':(options.sortName == 'publish_time')}"
        @click.prevent="changeSort('publish_time')"
        href="javascript:;">最新</a>
    </li>
    <li>
      <a
        :class="{'active':(options.sortName == 'visit_count')}"
        @click.prevent="changeSort('visit_count')"
        href="javascript:;">热门</a>
    </li>
    <li v-for="tag in tagList" :key="tag._id">
      <a
        :class="{'active':(options.tagId == tag._id)}"
        @click.prevent="changeTag(tag._id)"
        href="javascript:;">{{tag.name}}</a>
    </li>
    <li>
      <img
        v-show="isFetching"
        class="loader-tiny"
        :src="loadingImg"
        alt="Tiny">
    </li>
  </ul>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import tiny from '@/assets/images/tiny.gif';

@Component
export default class Tags extends Vue {
  @Prop()
  tagList:any
  @Prop()
  options:any
  @Prop()
  isFetching:any

  loadingImg:any = tiny;

  changeSort(sortName:any) {
    this.$emit('change', {
      currentPage: 1,
      sortName,
      tagId: '',
    });
  }

  changeTag(tagId:any) {
    this.$emit('change', { currentPage: 1, sortName: '', tagId });
  }
}
</script>
