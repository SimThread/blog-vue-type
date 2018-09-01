<template>
  <div class="settings-box">
    <div class="settings-container">
      <h2 class="title">设置</h2>
      <hr />
      <div class="profile">
        <!-- 呢称邮件-->
        <div class="control-group" id="settingsForm">
          <form class="settings-form" @submit.prevent="mdUser()" novalidate>
            <div class="form-group">
              <div class="form-group">
                <label class="control-label">昵称</label>
                <input
                  type="text"
                  name="nickname"
                  v-model="newNickname"
                  v-validate="'required|nickname|min:4|max:30'"
                  class="form-control"
                  placeholder="2-15字符，中英文、数字和下划线"/>
              </div>
            </div>
            <div class="form-group">
              <button type="submit" class="btn btn-block btn-lg btn-primary">保 存</button>
            </div>
          </form>
        </div>
      </div>
      <!-- content 结束 -->
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import { Validator } from 'vee-validate';

@Component
export default class Setting extends Vue {
  @State(({ auth }) => (auth.user && auth.user.nickname) || '') nickname:any

  @Action updateUser:any
  @Action getUserInfo:any

  mdNickname:any = null

  get newNickname() {
    return this.mdNickname === null?this.nickname:this.mdNickname;
  }

  set newNickname(value) {
    this.mdNickname = value || '';
  }

  created() {
    if (!this.nickname) {
      this.getUserInfo();
    }
  }

  mdUser() {
    if (this.newNickname) {
      this.updateUser({ nickname: this.newNickname });
    }
  }
}
</script>
