import { AxiosInstance, AxiosResponse } from 'axios';
import { LoginForm, SignUpForm } from '../../../views/login/LoginView';
import { UserDTO } from '../../types/apiType';

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

  signUp = async ({ name, email, password, confirmPassword }: any): Promise<AxiosResponse> => {
    const { data } = await this.axios.post('auth/sign-up', { name, email, password, confirmPassword });
    return data;
  };
}
