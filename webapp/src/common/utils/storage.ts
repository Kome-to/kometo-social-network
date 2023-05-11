import { CookieOptions } from 'i18next-browser-languagedetector';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const storageKey = {
  TOKEN: 'token',
};

export const storage = {
  setToken: (token: string, option?: CookieOptions) => cookies.set(storageKey.TOKEN, token, option),

  getToken: () => cookies.get(storageKey.TOKEN),

  removeToken: (option?: CookieOptions) => cookies.remove(storageKey.TOKEN, option),

  get isLoggedIn() {
    return !!this.getToken();
  },
};
