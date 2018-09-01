<template>
  <div class="settings-box">
    <div class="settings-container">
      <h2 class="title">App 下载</h2>
      <hr/>
        <div v-for="(items,index) in apps" :key="index"  class="row mobile-apps">
            <p class="version">{{items.name}}版
              <a :href="items.gitUrl" target="_blank"><i class="fa fa-github"></i></a>
            </p>
            <ul class="col-sm-7 downloads">
              <li>
                <a :href="items.downloadUrl.android || 'javascript:;'" class="btn btn-large btn-success">
                  <i class="fa fa-android"></i>
                  <span>Android版</span>
                </a>
              </li>
              <li>
                <a :href="items.downloadUrl.ios || 'javascript:;'" class="btn btn-large btn-info">
                  <i class="fa fa-mobile"></i>
                  <span>iPhone版</span>
                </a>
              </li>
            </ul>
          <div class="hidden-xs qrcode">
            <img :src="items.qrcode" alt="Download app qrcode"/>
          </div>
        </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex';
import { Component, Prop, Watch, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';

@Component
export default class Apps extends Vue {
  @State(({ apps }) => apps.items) apps:any
  @Action('getApps') getApps:any

  created() {
    this.getApps();
  }
}
</script>
