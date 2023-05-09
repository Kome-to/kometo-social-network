import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const storageKey = {
  TOKEN: 'token',
};

export const storage = {
  setToken: (token: string) => cookies.set(storageKey.TOKEN, token),

  getToken: () => cookies.get(storageKey.TOKEN),

  removeToken: () => cookies.remove(storageKey.TOKEN),

  get isLoggedIn() {
    return !!this.getToken();
  },
};
