import { AxiosInstance, AxiosResponse } from 'axios';

export default class UserService {
  constructor(private axios: AxiosInstance) {}

  getMe = async (): Promise<AxiosResponse<any>> => {
    const { data } = await this.axios.get('user/me');
    return data;
  };

  updateMe = async ({
    firstName,
    lastName,
    email,
    phone,
    country,
    address,
    description,
    avatar,
  }: {
    firstName?: string;
    lastName?: string;
    email?: string;
    phone?: string;
    country?: string;
    address?: string;
    description?: string;
    avatar?: File;
  }): Promise<AxiosResponse<any>> => {
    const bodyFormData = new FormData();

    if (avatar) {
      bodyFormData.append('file', avatar);
    }

    if (lastName) {
      bodyFormData.append('lastName', lastName);
    }
    if (email) {
      bodyFormData.append('email', email);
    }
    if (phone) {
      bodyFormData.append('phone', phone);
    }
    if (country) {
      bodyFormData.append('country', country);
    }
    if (address) {
      bodyFormData.append('address', address);
    }
    if (description) {
      bodyFormData.append('description', description);
    }
    if (firstName) {
      bodyFormData.append('firstName', firstName);
    }

    const { data } = await this.axios.post('user/me', bodyFormData);
    return data;
  };

  getSuggestFriend = async () => {
    const { data } = await this.axios.get('user/suggest-friend');
    return data;
  };

  requestFriend = async ({ id, action }: any) => {
    const { data } = await this.axios.post('user/request-friend', { id, action });
    return data;
  };

  createPost = async ({ createPostContent, file }: any) => {
    const bodyFormData = new FormData();
    bodyFormData.append('file', file);
    bodyFormData.append('createPostContent', createPostContent);
    const { data } = await this.axios.post('user/post', bodyFormData);
    return data;
  };

  getPost = async () => {
    const { data } = await this.axios.get('user/post');
    return data;
  };
}
