import { AxiosInstance, AxiosResponse } from 'axios';
import { LoginForm } from '../../../views/login/LoginView';
import { SignUpForm } from '../../../views/sign-up/SignUpView';
import { Role, UserDTO } from '../../types/apiType';

export interface VerifyInviteForm {
  username: string;
  password: string;
  confirmationPassword: string;
  token: string;
}

export interface ResetPasswordForm {
  token: string;
  password: string;
  confirmationPassword: string;
}

export default class AuthService {
  constructor(private axios: AxiosInstance) {}

  login = async ({ email, password }: LoginForm): Promise<AxiosResponse<UserDTO>> => {
    const { data } = await this.axios.post('auth/login', { email, password });
    return data;
  };

  signUp = async ({ username, email, password, confirmationPassword }: SignUpForm): Promise<AxiosResponse<UserDTO>> => {
    const { data } = await this.axios.post('auth/signup', { username, email, password, confirmationPassword });
    return data;
  };
}
