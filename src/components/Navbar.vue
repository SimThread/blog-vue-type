<template>
    <div class="navbar-box navbar-skin">
      <div class="navbar-menu">
          <router-link :to="{ path: '/' }" class="navbar-item logo" :class="{'active':$route.name !== 'apps'}" title="首页">
            CX
          </router-link>
      </div>

      <div class="navbar-expanded">
          <div>
            <a class="navbar-item change-mode" href="javascript:;" @click="changeMode()">
              <i v-if="styleMode === 'day-mode'" class="fa fa-moon-o"></i>
              <i v-else class="fa fa-sun-o"></i>
            </a>
          </div>

          <div v-if="auth.token && auth.user">
            <a href="javascript:;" class="navbar-item expanded-logout" @click="logout()" title="登出">
                <i class="fa fa-sign-out"></i>
            </a>
            <router-link :to="{ path: '/settings' }" class="navbar-item expanded-avatar" v-bind:title="auth.user.nickname">
              <img :src="auth.user.avatar || defaultAvatar"/>
            </router-link>
          </div>
          <div v-else>
            <router-link :to="{ path: '/login',activeClass:'active' }" class="navbar-item" title="登录">
              <i class="fa fa-sign-in"></i>
            </router-link>
          </div>
      </div>

      <div class="navbar-shrink">
        <div v-if="auth.token && auth.user" class="pull-right">
          <a href="javascript:;" class="shrink-avatar" @click="dropdown()">
            <img :src="auth.user.avatar || defaultAvatar"/>
          </a>
          <ul class="dropdown-menu pull-right" id="dropdownMenu">
            <li>
              <router-link :to="{ path: '/settings' }">
                <i class="fa fa-cog"></i> 设置
              </router-link>
            </li>
            <li role="separator" class="divider"></li>
            <li>
              <a href="javascript:;" class="shrink-logout" @click="logout()">
                  <i class="fa fa-sign-out"></i> 登出
              </a>
            </li>
          </ul>
        </div>
        <div v-else class="pull-right">
          <router-link :to="{ path: '/login' }" class="shrink-login" title="登录">
            <i class="fa fa-sign-in"></i> 登录
          </router-link>
        </div>
          <a class="pull-right navbar-item change-mode" href="javascript:;" @click="changeMode()">
            <i v-if="styleMode === 'day-mode'" class="fa fa-moon-o"></i>
            <i v-else class="fa fa-sun-o"></i>
          </a>
          <a class="pull-right expanded-var angular1" href="//angular.jackhu.top" title="Angular1.x版">
          </a>
          <a class="pull-right expanded-var react" href="//react.jackhu.top" title="React版">
          </a>
          <a class="pull-right expanded-var vue" href="//vue.jackhu.top" title="Vue版">
          </a>
          <a class="pull-right expanded-var angular2" href="//angular2.jackhu.top" title="Agnular2.x版">
          </a>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { State, Action } from 'vuex-class';
import defaultAvatar from '../assets/images/avatar.png';
import { getCookie, saveCookie, signOut } from '../utils/authService';

@Component
export default class Navbar extends Vue {
  @State(state => state.auth) auth:any
  @State(state => state.globalVal.styleMode) styleMode:any

  @Action changeStyleMode:any
  @Action logout:any
  @Action getUserInfo:any

  get defaultAvatar() {
    return defaultAvatar;
  }

  created() {
    document.body.className = this.styleMode;
    if (this.auth.token) {
      this.getUserInfo();
    }
  }

  changeMode() {
    this.changeStyleMode();
    document.body.className = this.styleMode;
  }

  dropdown() {
    const dropdownMenu = document.getElementById('dropdownMenu');

    if (dropdownMenu) {
      const isShow = dropdownMenu.style.display !=='block' ? 'block' : 'none';
      dropdownMenu.style.display = isShow;
    }
  }
}
</script>
