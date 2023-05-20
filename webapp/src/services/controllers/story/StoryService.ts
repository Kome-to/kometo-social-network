import { AxiosInstance, AxiosResponse } from 'axios';

export default class StoryService {
  constructor(private axios: AxiosInstance) {}

  createStory = async ({ file }: any): Promise<AxiosResponse<any>> => {
    const bodyFormData = new FormData();

    bodyFormData.append('file', file);

    const { data } = await this.axios.post('story', bodyFormData);
    return data;
  };

  getStory = async (): Promise<AxiosResponse<any>> => {
    const { data } = await this.axios.get('story');
    return data;
  };
}
