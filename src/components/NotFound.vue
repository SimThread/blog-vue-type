<template>
  <p class="not">404, 页面没有发现.</p>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NotFound extends Vue {
}
</script>
<style>
.not{
  text-align: center;
  font-size: 36px;
  margin-top: 20%;
}
</style>
