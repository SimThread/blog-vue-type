<template>
  <vue-toast ref="toast"></vue-toast>
</template>

<script lang="ts">
import { Component, Watch, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import VueToast from 'vue-toast';
import { mapState, mapActions } from 'vuex';

@Component({
  components: { VueToast, }
  })
export default class Toaster extends Vue {
  @State(({ showmsg }) => showmsg.message) msg:any

  @Action showMsg:any
  @Action hideMsg:any

  @Watch('msg', { deep: true })
  onWatchMsg(val:any, oldVal:any) {
    if (val.content !== '') {
      this.showToastr(val.content, val.type);
      this.hideMsg();
    }
  }

  showToastr(content:any, type='error', position='top right') {
    const {
      toast }:any = this.$refs;
    toast.setOptions({ maxToasts: 3, position });
    toast.showToast(content, {
      theme: type,
      timeLife: 2000,
      closeBtn: false,
    });
  }
}
</script>
