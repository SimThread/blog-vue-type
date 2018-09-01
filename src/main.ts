import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import '@/registerServiceWorker';
import 'font-awesome/css/font-awesome.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'vue-toast/dist/vue-toast.min.css';
import App from './App.vue';
// import 'jackblog-sass/dist/index.css'
import './assets/scss/index.css';
import './assets/styles/index.css';
import './filters';
import './utils/validators';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
