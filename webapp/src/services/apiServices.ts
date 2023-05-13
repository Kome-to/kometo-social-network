import ApiClient from './apiClient';
import AuthService from './controllers/auth/AuthService';
import UserService from './controllers/user/UserService';

export class ApiService {
  public auth: AuthService;

  public user: UserService;

  constructor() {
    this.auth = new AuthService(ApiClient);
    this.user = new UserService(ApiClient);
  }
}

const api = new ApiService();

export default api;
