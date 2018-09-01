<template>
  <modal v-model="showLoginModal" effect="fade" width="400">
    <div slot="modal-header" class="modal-header">
      <h4 class="modal-title text-center">请用以下方式登录</h4>
    </div>
    <div slot="modal-body" class="modal-body">
      <div class="portlet-body">
          <snsloginbtns :logins="logins"></snsloginbtns>
      </div>
    </div>
    <div slot="modal-footer">
    </div>
  </modal>
</template>

<script lang="ts">
import { mapState, mapActions } from 'vuex';
import { Component, Vue } from 'vue-property-decorator';
import { Action, State } from 'vuex-class';
import { modal } from 'vue-strap';
import snsloginbtns from './snsLogin.vue';

@Component({
  components: {
  snsloginbtns,
  modal, }
  })
export default class Modal extends Vue {
  @State(({ logins }) => logins.items) logins:any

  @Action getSnsLogins:any

  showLoginModal:boolean = false

  created() {
    if (this.logins.length < 1) {
      this.getSnsLogins();
    }
  }

  showModal() {
    this.showLoginModal = true;
  }
}
</script>
