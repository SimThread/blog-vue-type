<template>
  <div class="login-sns">
    <ul>
      <li  v-for="(item,index) in logins" :key="index" @click.stop.prevent="snsLogin(item)">
        <a v-bind:class="item" href="#"><i v-bind:class="'fa fa-' + item"></i></a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { getCookie, isLogin } from '@/utils/authService';

const API_ROOT = process.env.VUE_APP_API_ROOT;

@Component
export default class SnsLogin extends Vue {
  @Prop({ type: Array })
  logins: any

  snsLogin(provider:any) {
    let search = `${API_ROOT}auth/${provider}?redirectUrl=${window.location.origin}`;
    if (isLogin()) {
      const token = getCookie('token');
      search += `&access_token=${token.replace(/(^")|("$)/g, '')}`;
    }
    window.location.href = search;
  }
}
</script>
