import Cookies from 'universal-cookie';
import { CookieDomain } from '@/config';

const cookies = new Cookies();

let cookieConfig = {};
if (CookieDomain !== '') {
  cookieConfig = { domain: CookieDomain }; // path:'/',maxAge:365*24*60*60
}

export function saveCookie(name:any, value:any) {
  cookies.set(name, value, cookieConfig);
}

export function getCookie(name:any) {
  return cookies.get(name);
}

export function removeCookie(name:any) {
  cookies.remove(name, cookieConfig);
}

export function signOut() {
  cookies.remove('token', cookieConfig);
}

export function isLogin() {
  return !!cookies.get('token');
}
