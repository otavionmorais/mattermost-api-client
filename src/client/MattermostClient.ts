import { IMattermostClientParams, User } from './types';
import axios, { AxiosInstance } from 'axios';
import { MattermostError } from './utils';
import { DEFAULT_MATTERMOST_VERSION, MATTERMOST_ENDPOINTS } from './constants';

class MattermostClient {
  #user: User | null = null;
  #axiosClient: AxiosInstance;
  #login_id: string;
  #password: string;
  #endpoints: Record<string, string>;

  constructor({
    login_id,
    password,
    baseUrl,
    apiVersion = DEFAULT_MATTERMOST_VERSION,
  }: IMattermostClientParams) {
    this.#login_id = login_id;
    this.#password = password;
    this.#axiosClient = axios.create({
      baseURL: baseUrl,
    });
    this.#endpoints = MATTERMOST_ENDPOINTS(apiVersion);
  }

  public async login(): Promise<User> {
    try {
      const { data, headers } = await this.#axiosClient.post<User>(
        this.#endpoints.LOGIN,
        {
          login_id: this.#login_id,
          password: this.#password,
        },
      );

      this.#user = data;
      this.#axiosClient.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${headers.token}`;

      return data;
    } catch (error) {
      throw MattermostError(error);
    }
  }

  public async logout(): Promise<void> {
    try {
      await this.#axiosClient.post(this.#endpoints.LOGOUT);
    } catch (error) {
      throw MattermostError(error);
    }
  }

  get user(): User | null {
    return this.#user;
  }
}

export default MattermostClient;
