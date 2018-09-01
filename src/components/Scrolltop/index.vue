<template>
  <div v-show="isShowTop" class="gotop" @click.prevent="gotop">
      <i class="fa fa-arrow-up"></i>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Scrolltop extends Vue {
  isShowTop:any = false

  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    if (window.scrollY > 200) {
      this.isShowTop = true;
    } else {
      this.isShowTop = false;
    }
  }

  gotop() {
    window.scrollTo(0, 0);
  }
}
</script>
