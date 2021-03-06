import axios from 'axios';
import config from '@/utils/config';
import { signOut } from '@/utils/authService';

// 取消重复请求
const pending: Array<{
url: string,
cancel: Function
}> = [];

const { CancelToken } = axios;
const removePending = (config:any) => {
  for (const [key, val] of pending.entries()) {
    const item: any = key;
    const list: any = val;

    // 当前请求在数组中存在时执行函数体
    if (list.url === `${config.url}&request_type=${config.method}`) {
      // 执行取消操作
      list.cancel();
      // 从数组中移除记录
      pending.splice(item, 1);
    }
  }
};

const service = axios.create(config);

// 添加请求拦截器
service.interceptors.request.use(
  (config) => {
    removePending(config);
    config.cancelToken = new CancelToken((c) => {
      pending.push({ url: `${config.url}&request_type=${config.method}`, cancel: c });
    });
    return config;
  },
  error => Promise.reject(error),
);

// 返回状态判断(添加响应拦截器)
service.interceptors.response.use(
  (res) => {
    removePending(res.config);
    console.log('res:', res);
    if (res.status === 401) {
      signOut();
      window.location.pathname = '/login';
    } else if (res.status === 422) {
      alert(res.data.error_msg);
    }
    return res;
  },
  error => Promise.reject(error),
);

export default service;
