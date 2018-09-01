<template>
  <div class="col-sm-3 sidebar-box">
    <div class="cover-img" :style="{ backgroundImage: 'url(' + indexImg + ')' }"></div>
    <!-- <div class="bottom-block">
      <h1>C X</h1>
      <h3>有朋自远方来</h3>
      <h3>不亦乐乎</h3>
    </div> -->
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Sidebar extends Vue {
  @Prop()
  indexImg: any
}
</script>
