declare module '*.png' {
  const value: any;
  export = value;
}

declare module '*.gif' {
  const value: any;
  export = value;
}

declare module 'vue-toast' {
  import Vue from 'vue';

  class VueToast extends Vue {}
  export = VueToast;
}
