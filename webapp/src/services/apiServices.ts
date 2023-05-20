import ApiClient from './apiClient';
import AuthService from './controllers/auth/AuthService';
import StoryService from './controllers/story/StoryService';
import UserService from './controllers/user/UserService';

export class ApiService {
  public auth: AuthService;

  public user: UserService;

  public story: StoryService;

  constructor() {
    this.auth = new AuthService(ApiClient);
    this.user = new UserService(ApiClient);
    this.story = new StoryService(ApiClient);
  }
}

const api = new ApiService();

export default api;
