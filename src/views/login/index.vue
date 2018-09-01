<template>
  <div class="signin-box">
    <div class="signin-container">
      <h4 class="title">登 录</h4>
      <div id="signinForm">
        <form
          class="signin-form form-horizontal"
          @submit.prevent="login()"
          novalidate>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon">
                <i class="fa fa-envelope-o"></i>
              </div>
              <input
                type="text"
                name="email"
                v-model="user.email"
                v-validate="'required|email|min:3'"
                data-vv-delay="100"
                class="form-control"
                placeholder="邮箱"/>
            </div>
          </div>
          <div class="form-group">
            <div class="input-group">
              <div class="input-group-addon"><i class="fa fa-unlock-alt"></i></div>
              <input
                type="password"
                name="password"
                v-model="user.password"
                v-validate="'required|min:5'"
                class="form-control"
                placeholder="密码"/>
            </div>
          </div>
          <div class="form-group">
            <div class="col-xs-6 captcha-code">
              <input
                type="text"
                name="captcha"
                v-model="user.captcha"
                v-validate="'required|min:5|max:6'"
                maxlength="6"
                class="form-control"
                placeholder="验证码"/>
            </div>
            <div class="col-xs-6 captcha-img">
              <a href="javascript:;" @click.prevent="getCaptchaUrl()">
                <img :src="captchaUrl"/>
              </a>
            </div>

          </div>
          <div class="form-group">
            <button
              class="btn btn-primary btn-lg btn-block"
              type="submit"
              id="signin_btn">登 录</button>
          </div>
        </form>
      </div>
      <div class="login-sns">
        <p>您还可以通过以下方式直接登录</p>
        <snsloginbtns :logins="logins"></snsloginbtns>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Validator } from 'vee-validate';
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import snsloginbtns from './snsLogin.vue';


@Component({
  components: {
  snsloginbtns, }
  })
export default class Login extends Vue {
  @State(({ globalVal }) => globalVal.captchaUrl) captchaUrl:any
  @State(({ logins }) => logins.items) logins:any
  @State(({ auth }) => auth.token) token:any

  @Action getSnsLogins:any
  @Action getCaptchaUrl:any
  @Action localLogin:any

  user:any = {
    email: '',
    password: '',
    captcha: '',
  }

  created() {
    this.getCaptchaUrl();
    this.getSnsLogins();
  }

  login() {
    this.$validator.validateAll().then((result) => {
      if (result) {
        this.localLogin(this.user);
      }
    }).catch(() => {
      // 提示错误
    });
  }
}
// :disabled="!fields.valid()"
</script>
