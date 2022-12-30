import { IMattermostClientParams, User } from './types';
import axios, { AxiosInstance } from 'axios';
import { MattermostError } from './utils';
import { MATTERMOST_ENDPOINTS } from './constants';
import Teams from './teams';
import Threads from './threads';
import Channels from './channels';

class MattermostClient {
  #user: User | null = null;
  #axiosClient: AxiosInstance;
  #login_id: string;
  #password: string;
  #teams: Teams = new Teams(this);
  #threads: Threads = new Threads(this);
  #channels: Channels = new Channels(this);

  constructor({ login_id, password, baseUrl }: IMattermostClientParams) {
    this.#login_id = login_id;
    this.#password = password;
    this.#axiosClient = axios.create({
      baseURL: baseUrl,
    });
  }

  public async login(): Promise<User> {
    try {
      const { data, headers } = await this.#axiosClient.post<User>(
        MATTERMOST_ENDPOINTS.LOGIN(),
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
      await this.#axiosClient.post(MATTERMOST_ENDPOINTS.LOGOUT());
    } catch (error) {
      throw MattermostError(error);
    }
  }

  get user(): User | null {
    return this.#user;
  }

  get post() {
    return this.#axiosClient.post;
  }

  get get() {
    return this.#axiosClient.get;
  }

  get put() {
    return this.#axiosClient.put;
  }

  get delete() {
    return this.#axiosClient.delete;
  }

  get patch() {
    return this.#axiosClient.patch;
  }

  get teams() {
    return this.#teams;
  }

  get threads() {
    return this.#threads;
  }

  get channels() {
    return this.#channels;
  }
}

export default MattermostClient;
