<template>
  <footer>
  <div class="footer-container">
    <ul>
      <li>
        <span>©2018 / <a style="font-size: 12px; width:auto;" class="beian" href="http://www.miitbeian.gov.cn/">闽ICP备18015725号-1</a></span>
      </li>
      <li>
        <a class="github" href="https://github.com/SimThread" target="_blank">
          <i class="fa fa-github"></i>
        </a>
      </li>
      <li>
        <a class="weibo" href="https://weibo.com/5511725293" target="_blank">
          <i class="fa fa-weibo"></i>
        </a>
      </li>
    </ul>
  </div>
  </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Footer extends Vue {
}
</script>

<style scoped>
a.beian:hover {
  color: #e78170;
}
</style>
